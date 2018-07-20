---
title: "Inpainting"
date: "2018-07-20T07:45:00Z"
author: "Sergey Zavoloka"
authorProfileLink: "https://github.com/zavolokas"
---

It worth to make a service and host it somewhere in a cloud. (Next slide)


![Image](./assets/azure_function_solution001.png"

So the app just uses a WebApi and sends a request to process an image.

Initially I choose Azure, experemented with WorkerRole, but for many reasons it didn't work out.

With availability of serverless and Azure functions in particular I got back to this idea.


![Image](./assets/azure_function_solution002.png"

Because Azure functions are triggered quite fast and at the same time you don't pay for the time it's deployed but only for the resources you use. 

On the other hand functions are not very powerful and processing time can easily exceed the 5 minutes limit, after which the function is got killed basically.

What we could do, is to split the inpainting process into separate functions.


![Image](./assets/function-split.png)

It would also allow to scale individual steps of the inpainting process which is really nice.

However the question is (next slide)


![Image](./assets/function-split-issues.png)

How to orchestrate all these functions in a way that all the parts play nicely together in a synchronized and consistent way.

Output from one function needs to be sent as an input of another function, or some of them needs to be executed in a loop.

The answer is that we can use (Next slide)


## Durable Functions
- Simplify orchestration 
- Code your workflow  
  - Save output to local variables
- Stateful functions  
  - State is never lost


Durable Functions! (Next bullet)

The main use case for Durable Functions is simplifying complex orchestration problems in serverless applications. (Next bullet)

Workflow is now can be defined in code. No JSON schemas or designers. (Next bullet)

They are statefull. The progress is not lost when VM is restarting. It is one of the key features of Durable functions that they are 100% reliable.

There are some patterns where Durable Functions fit well.


### Function chaining

![Image](./assets/function-chaining.png)

call one function after another passing results into the next one


### Fan-out/fan-in

![Image](./assets/fan-out-fan-in.png)

We can call functions in parallel, gather result and do something else.

There are 3 more patterns on official documentation.

Let's jump into coding trying to apply it to the problem and see how does it work in practice


## Demo coding


The Azure Durable Function library adds two function bindings that are used by the system to find which functions should be treated as Durable:

- OrchestrationTrigger – All orchestrator functions must use this trigger type. This input binding is connected to the
  - DurableOrchestrationContext class that is used by the orchestrator to call durable-activities and create durable control flow
- ActivityTrigger – marks a function as activity, which allows it to be called by an orchestrator function. 
This input binding is connected to the DurableActivityContext class which allows the activity function to get the input and set the output.


# Easy!

![Image](./assets/wow.gif)

That was pritty easy!

This was an example almost identical to one that Microsoft provides - so it should work

but usually your case is a bit different and when you go a bit different direction you experiance some issues. 



## Demo coding 2



### What?!

![Image](./assets/confusion.gif)

Don't know how about you, but I've got a lot of questions.



### What?!

![Image](./assets/confusion.gif) 

- Storage account
- Serialization 
- Not supported async calls 

- Why does it requires storage account for orchestrator and activity functions? (next bullet)
- Serialization is the simplest one - we can assume that it transfer object between functions that way (next bullet)
- Why it complains about async calls that done without using context? (next bullet)
- It used to have another issue - it didn't allow payload more than is 60K?
- We need to learn how durable functions work under the hood. What makes them durable?



![Image](./assets/durable/duarable-process01.png)




![Image](./assets/durable/duarable-process02.png)




![Image](./assets/durable/duarable-process03.png)




![Image](./assets/durable/duarable-process04.png)




![Image](./assets/durable/duarable-process05.png)




![Image](./assets/durable/duarable-process06.png)




![Image](./assets/durable/duarable-process07.png)




![Image](./assets/durable/duarable-process08.png)




![Image](./assets/durable/duarable-process09.png)




![Image](./assets/durable/duarable-process10.png)




![Image](./assets/durable/duarable-process11.png)

Now we can answer some of our questions



![Image](./assets/confusion.gif) 

- Storage account
- Serialization 
- Not supported async calls 

As we saw Azure Durable Functions will create Queues under our storage account, that is why it is required(next bullet)

It is indeed serializes/deserializes objects to send them between functions

The last one is still not that clear. But we saw that function should somehow restore it's execution. 
Let's run our code again(next slide)



### Demo coding 3

and check the execution flow, how it gets reconstructed after calling an activity?


### Execution flow
- Checkpoint/Replay 

The thing is that orchestrator functions use one of the Event Sourcing technique - Chckpoint/Replay

That ensures reliable execution of orchestrations by checkpointing execution history into a storage table.

You can find all the checkpoints in your storage account (next slide)


#### History table

![Image](./assets/history_table.png)

in the DurableFunctionHubHistory table

That history is replayed to rebuild the state of orchestrator function.

This is one of the key attributes of Durable Functions - reliable execution. Orchestrator and Activities may be run on different VMs in some environment that is not 100% reliable.

This repay process leads to an interesting execution behaviour. Let me show it on an example(next excample)



![Image](./assets/minions/pre_giphy.png) 

with the help of this guys. Let them practice in origami and ask them to make a plane 

one of the them will be orchestrator and another one activity



![Image](./assets/minions/pre_giphy02.png) 

Like this



![Image](./assets/minions/giphy.gif) 

The reaction is strange.



![Image](./assets/minions/checkpoint-replay-start.png)

This instructions are executed by the orchestrator and all the folding operations are done by the activity.



![Image](./assets/minions/checkpoint-replay-step0.png)




![Image](./assets/minions/checkpoint-replay-ok.png)




![Image](./assets/minions/checkpoint-replay-finished.png)




![Image](./assets/minions/checkpoint-replay-step1.png)




![Image](./assets/minions/checkpoint-replay-done.png)




![Image](./assets/minions/checkpoint-replay-step2.png)




![Image](./assets/minions/checkpoint-replay-ok.png)




![Image](./assets/minions/checkpoint-replay-finished.png)




![Image](./assets/minions/checkpoint-replay-step1.png)




![Image](./assets/minions/checkpoint-replay-done.png)




![Image](./assets/minions/checkpoint-replay-step2.png)




![Image](./assets/minions/checkpoint-replay-done.png)




![Image](./assets/minions/checkpoint-replay-step3.png)




![Image](./assets/minions/checkpoint-replay-ok.png)




![Image](./assets/minions/checkpoint-replay-finished.png)




![Image](./assets/minions/checkpoint-replay-step1.png)




![Image](./assets/minions/checkpoint-replay-done.png)




![Image](./assets/minions/checkpoint-replay-step2.png)




![Image](./assets/minions/checkpoint-replay-done.png)




![Image](./assets/minions/checkpoint-replay-step3.png)




![Image](./assets/minions/checkpoint-replay-done.png

You should keep in mind that kind of behaviour because it really can lead to a poor performance. Simply because of serialization/deserialization.

This example with 6 chained Fold actions can(next slide)


```CSharp
for (var stepIndex = 0; stepIndex< 6; stepIndex++)
{
  await ctx.CallActivityAsync("Fold", input);
}
```

How many ctx.CallActivityAsync() calls? 

be respresented in code like this (next bullet)

How many times the call activity async method will be called?

This is a triangular number that(next slide)


(N \* (N-1)) / 2 = 6 \* 5 / 2 = 15

TODO: put propper formula

can be calculated as follows.


### Calls to Activity
![Image](./assets/triangle_number.png)

- 7 - 21
- 10 - 45
- 20 - 190
- 100 - 4950

that means that if we have a loop with 20 iterations -  190

It becomes really noticable when 

```CSharp
for (var stepIndex = 0; stepIndex< 6; stepIndex++)
{
  DoSomethingHeavy();
  await ctx.CallActivityAsync("Fold", input);
}
```


We have some code in the Orchestrator that is kind of heavy. This code will be executed 15 times while Fold only 6.

That leads us to another topic - optimizations


### Possible optimizations
- Avoid heavy code in Orchestrator 
- Use sub Orchestrations  
- Minimize reads from storage  


### Restrictions

- Avoid non-determenstic 
- Avoid async calls 
- Avoid infinite loops 

It will be replayed multiple times and must produce the same result each time. For example, no direct calls to get the current date/time, get random numbers, generate random GUIDs, or call into remote endpoints. (next bullet)

The Durable Task Framework executes orchestrator code on a single thread and cannot interact with any other threads that could be scheduled by other async APIs. (next bullet)

saves execution history as the orchestration function progresses, an infinite loop could cause an orchestrator instance to run out of memory.

But still problems can happen and you might be stuck (next slide)


### Support
- GitHub
- StackOverflow
- Twitter

then Post the issue on stack overflow also tweet about it, put hash tag Azure, Azure Functions and usually you get help quite fast


## Key take aways
- Statefull orchestration 
- 100% reliable 
- Orchestrator restrictions 
- Checkpoint/Replay 
- Sub Orchestrators 
- Prerelease 
- Heavy computations? 

- What are the key take aways? (next bullet)
- Durable extension allows to orchestrate azure functions (next bullet)
- It is 100% reliable. You need to remember (next bullet)
- about the restrictions, that the orchestrator code should be detemenistic, you cannot use async calls other than via durable context (next bullet)
- Keep in mind the Checkpoint/Replay technique that is used by Orchestrator and use (next bullet)
- sub orchestors in order to improve performance
- It is still pre release, many things can go wrong, many things can change. Don't hesitate to ask for advice on SO etc.
- If you want to port some performance critical computations think twice as you'll spend a lot of time to serialization and desirialization


# Questions

- Pricing
  - GB-s $0.000016
  - Cost of one mln exec $0.20
  - Cost of one minute => 0.128GB * 60000ms = 7680 Gs
  - Free GB-s per month => 400,000 free ~ 52 min 
  - Free executions => 1,000,000 