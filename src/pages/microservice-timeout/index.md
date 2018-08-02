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

And this is a piece of code, causing a problem:

```csharp
_hhtpClient.Timeout = TimeSpan.FromMilliseconds(timeout);
var response = await _httpClient.SendAsync(request);

```

Even though the request timed out, the parking action has still been created. Look what happened. The API Gateway aborted the request to Parking service once timeout exceeded, but it did not cancel it. At that moment the Parking service was waiting for the database operation to complete. You are totally right if you thought of what is known as Compensating Transaction pattern. And to make it right, we have to inform the Parking service that the operation was cancelled and we should stop processing and rollback all the actions performed (if any). And here the CancellationToken comes into play.

```csharp

var tokenSource = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken);
tokenSource.CancelAfter(timeout);
var response = await _httpClient.SendAsync(request, tokenSource.Token);

```

