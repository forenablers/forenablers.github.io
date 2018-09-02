---
title: "Challanges during PN hackathon 2018"
date: "2018-07-19T10:45:00Z"
author: ""
authorProfileLink: ""
---

Do you have a lot of data that you were collecting many years and now you consider doing some magic by applying Machine Learning? It might be dissapointing to get to know that the data you were collecting is not complete. 

In this post I'll summarize our experience of trying to apply Machine Learning during our company's internal hackathon([here are more info about the hackathon]()). 

## Problem
We tried to use Machine Learning to takle **parking availability** problem that was stated as follows:

> As a customer I want to search for parking in a specific area and get insight if there are spaces available? Show our customers parking prediction per street/area using our transaction history.

To be honest - Machine Learning was the first solution that poped up in our technology driven minds. 

## Machine Learning
What do we know about Machine Learning?
> Machine learning is like teenage sex: everyone talks about it, nobody really knows how to do it, everyone thinks everyone else is doing it, so everyone claims they are doing it.. 
>
> (c) Someone smart and funny

What we want essentually is that our program learns how to solve a problem **itself**. **(TODO: context is lost - what ifs??)** We could write a piece of software that has a lots of `if` statements for all kind of situations, but we are lazy and it's also doesn't look feasible.

There are following types of learning methods available to solve different types of problems:
- Supervised learning for predictions and classifications
- Unsupervised learning for clustering and associations
- Reinforcement learning for learning from experience

As we can see above, to be able to make predictions about parking availability we need to utilize supervised learning. 

## Supervised learning
How does the supervised learning works? In supervise learning we teach our model to make predictions in a loop:
- initialize a model with random parameters
- ask model to make predictions based on an input data
- compare the prediction with desired output
- adjusts model's parameters to minimize the error 

The key point is that **we must know the prediction(output) for each input** in the training data set. This paired data of *inputs and results* is named **labeled** data.

The classical example of labeled data for supervised learning is a data set of labeled images with dogs and cats. We know who is pictured on each image: a cat or a dog.

![Cats & Dogs](./images/casndogs.jpg)

The knowledge of the output allows us to train the model in supervised manner. 

## Prediction of Parking Availability with Supervised Learning
Now let's try to answer the question - **how our data set should look like so that we could predict parking availability?**

**The output data** should be either *parking is available* or *unavailable*. It can have different forms ofcourse - binary(yes, no), or probability of availability(87% is available), or something else.

**The input data** should have features that influence parking availability. Features selection is a quite chellanging problem itself. We need to select them wisely so that our model will make quite accurate predictions for inputs that it haven't seen before.

Desired data set could look like this:

|input <br /> curLat, curLon, destLat, destLon, day, minute |label <br /> available|
|-----|------|
|52.3485772, 5.0082082, 52.356612, 4.895434, 244, 772|true|
|52.3485241, 5.0082011, 52.356278, 4.995423, 345, 631|true|
|52.3485789, 5.0082022, 52.353972, 4.995412, 134, 1083|false|
|52.3489271, 5.0082082, 52.356129, 4.993729, 245, 890|false|
|52.3485772, 5.0082090, 52.356605, 4.995392, 64, 402|true|



>//TODO: specific of our app

>//TODO: no labeled data

>//TODO: another approach - predict amount of parking spots

>//TODO: when it is possible - chart

>//TODO: our experement and unreliable result

>//TODO: main conclusion - we have to collect data

## Data

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