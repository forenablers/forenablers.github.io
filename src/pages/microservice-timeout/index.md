---
title: "Microservices: Handling timeouts"
date: "2018-08-01T23:00:00Z"
author: "Borys Generalov"
---

 The timeout pattern is perhaps the most basic way to reveal performance issues and satisfy the SLA. Even though the request did not succeed, the client gets the response within defined SLA time span and the request can be retried. It sounds easy to implement as well. Simply set the timeout in the service client, i.e. RestClient, HttpWebRequest, HttpClient. Once the timeout exceeded, the request is aborted. Wait, but is it really so simple?

Here is the excerpt from Kibana logs of the real-world production microservice. An attempt to create parking action has timed out and the caller received an error response with 500 http status code. Then the caller retried and received the error again, this time the response with 409 http status code, saying that the item already exists.

![Kibana logs](./images/kibana.png)

The following diagram illustrates the high-level process:

![UML overview](./images/uml.overview.png)

And this is a piece of code in API Gateway causing the problem:

```csharp
_hhtpClient.Timeout = TimeSpan.FromMilliseconds(timeout);
var response = await _httpClient.SendAsync(request);
```

Even though the request timed out, the parking action has still been created. Look what happened. The API Gateway aborted the request to Parking service once timeout exceeded, but it did not cancel it. At that moment the Parking service was waiting for the database operation to complete. You are totally right if you thought of what is known as Compensating Transaction pattern. And to make it right, we have to inform the Parking service that the operation was cancelled and we should stop processing and rollback all the actions performed (if any). And here the CancellationToken comes into play.

This is what you would change at the API Gateway:

```csharp
var tokenSource = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken);
tokenSource.CancelAfter(timeout);
var response = await _httpClient.SendAsync(request, tokenSource.Token);
```

And the changes on the Parking service. First we modify controller to accept the cancellation token:

```csharp
 public async Task<IHttpActionResult> CreateParkingright(CreateParkingrightRequest request, CancellationToken cancellationToken)
{
    cancellationToken.ThrowIfCancellationRequested();
    var parkingright = _parkingrightConverter.ToParkingrightEntity(request);
    var parkingrightId = await _parkingrightRepository.Insert(parkingright, cancellationToken);
    ...
}
```

Finally, the repository is adjusted as following:

```csharp
public async Task<T> Insert<T>(IModel model, object param, CancellationToken cancellationToken)
{
    T result;
    using (var connection = CreateSqlConnection())
    {
        using (var transaction = connection.BeginTransaction())
        {
            //NOTE: we can not use DapperExtensions here as they do not support cancellation tokens
            var sql = _sqlGenerator.GetInsertCommandText(model);
            var command = new CommandDefinition(sql, param, transaction, cancellationToken);
            result = await connection.ExecuteScalarAsync<T>(command);
            if(!cancellationToken.IsCancellationRequested)
                transaction.Commit();
        }
    }
    return result;
}
```

Now, whenever the timeout exceeded, the request is cancelled, propagating the cancellation from API Gateway to the Parking service, so that it cancels the activity as well. This reduces the number of false-positive errors and provide consistent results