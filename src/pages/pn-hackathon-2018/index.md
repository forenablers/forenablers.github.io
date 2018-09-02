---
title: "Machine Learning and Parking Availability"
date: "2012-07-19T10:45:00Z"
author: ""
authorProfileLink: ""
---

Do you have a lot of data that you were collecting many years and now you consider doing some magic by applying Machine Learning? It might be dissapointing to get to know that the data you were collecting is not complete. 

In this post I'll summarize our experience of trying to apply Machine Learning during our company's internal hackathon([here are more info about the hackathon]()). 

### Problem

During the hackathon we takled a **parking availability** problem that was stated as follows:

> As a customer I want to search for parking in a specific area and get insight if there are spaces available? Show our customers parking prediction per street/area using our transaction history.

The brute force approach would be to hardcode the availability for all possible parameters' values that affect the availability in particular parking location. Suppose that as parameters we have only `month`, `date`, `week day` and `time`, then the lookup table for one of the parking locations will look like:

|Month|Date|Week day|Time|Availability|
|-----|----|--------|----|------------|
|January| 1 | Monday| 00:00| Available|
|January| 1 | Monday| 00:05| Available|
|January| 1 | Monday| 00:10| Available|
|January| 1 | Monday| 00:15| Available|
|...| ... | ...| ...| ... |
|January| 1 | Tuesday| 00:25| Unavailable|
|January| 1 | Tuesday| 00:30| Unavailable|
|January| 1 | Tuesday| 00:35| Available|
|...| ... | ...| ...| ... |
|December| 31 | Sunday| 23:55| Available|

Having such a lookup table we could tell to someone who wants to park in this location on Tuesday January 1st at 0:27 that there are no available parking spots.

Unfortunately we don't know **what** and **how** influences the availability. That is why creating such a lookup table is not feasible. 

To be honest, we didn't even consider that because the first solution that poped up in our technology driven minds was Machine Learning. 

### Machine Learning
What do we know about Machine Learning?
> Machine learning is like teenage sex: everyone talks about it, nobody really knows how to do it, everyone thinks everyone else is doing it, so everyone claims they are doing it.. 
>
> (c) Someone smart and funny

What we want essentually is that our program learns how to solve a problem **itself** by discovering hidden patterns in the training data set.

There are following types of learning methods available to solve different types of problems:
- Supervised learning for predictions and classifications
- Unsupervised learning for clustering and associations
- Reinforcement learning for learning from experiments

As we can see above, to be able to make predictions about parking availability we need to utilize supervised learning. 

### Supervised learning
How does the supervised learning works? In supervise learning we perform followind steps to train our model:
- initialize a model with random parameters
- ask model to make predictions based on an input data
- evaluate the prediction based on **known output**
- adjusts model's parameters to minimize the error 

The key point is that **we must know the prediction(output) for each input** in the training data set. This paired data of *inputs and results* is named **labeled** data.

The classical example of labeled data for supervised learning is a data set of labeled images with dogs and cats. We know who is pictured on each image: a cat or a dog.

![Cats & Dogs](./images/casndogs.jpg)

The knowledge of the output allows us to train the model in supervised manner. 

### Parking Availability Training Data Set

Now let's try to answer the question - **how our training data set should look like so that we could predict parking availability?**

**The output data** should be either *parking is available* or *unavailable*. It can have different forms ofcourse - binary(yes, no), or probability of availability(87% is available), or something else.

**The input data** should have features that influence parking availability. Features selection is a quite chellanging problem itself. We need to select them wisely so that our model will make quite accurate predictions for inputs that it haven't seen before.

Desired data set could look like this:

|input <br /> curLat, curLon, destLat, destLon, day, minute |label (output) <br /> availability|
|-----|------|
|`52.3485772, 5.0082082, 52.356612, 4.895434, 244, 772`|<span style="color:#0a0">true</span>|
|`52.3485241, 5.0082011, 52.356278, 4.995423, 345, 631`|<span style="color:#0a0">true<span>|
|`52.3485789, 5.0082022, 52.353972, 4.995412, 134, 1083`|<span style="color:#f00">false</span>|
|`52.3489271, 5.0082082, 52.356129, 4.993729, 245, 890`|<span style="color:#f00">false</span>|
|`52.3485772, 5.0082090, 52.356605, 4.995392, 64, 402`|<span style="color:#0a0">true<span>|

Important part of the data set is the **labels** because we must know whether a parking was available in the given situation. Do we have these labels in our data that we have been collecting for years?

###  Cashless Parking Providers and data

What data do we have in reality? As the problem states - we need to give a prediction based on **transaction history**. These transaction history comes from a cashless parking provider(CPP) and basically are payments for parking in a particular zone at particular time.

Clients of CPP use the provided services once they are parked and want to pay for the parking. Therefore CPP receives transactions only for successful parkings - *client managed to park in that area*. 

The stored **successful parkings** might be *false positives* since we don't know where the client wanted to park **initially**. It is possible that the client wanted to park in one place but it was completely full so he ended up parking in another place far away from the initial destination point.

The conclusion is that **transactions don't have lables** to train a model to predict parking availability.

>//TODO: another approach - predict amount of parking spots

>//TODO: when it is possible - chart

>//TODO: our experement and unreliable result

>//TODO: main conclusion - we have to collect data

### Data

> PRDB states for Parking Rights Data Base

```mermaid
graph TD
    A[What data you have?] --> C{PRDB owner}
    C -->|Yes| D{Enforced}
    D --> |Yes| F{Buy time}
    D --> |No| B
    C --> |No| K{Major provider}
    K --> |No| B[Incomplete]
    K --> |Yes| D
    F --> |Yes| G[Inaccurate]
    F --> |No| H[Complete]
```