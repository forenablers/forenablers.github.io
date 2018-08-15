---
title: "Hackathon: Parking availability"
date: "2018-08-14T20:00:00Z"
author: "Borys Generalov"
---

It’s been a week since our regular hackathon at Parkmobile and it's a good time to recap and share key takeaways. The aim of the hackathon was to find innovative solutions that improve the life of drivers dealing with the parking challenges. I teamed up with a few like-minded people and we focused on Parking Availability challenge. Here I am going to deep-dive into the availability problem and share our findings.

### The challenge

> As a customer I want to search for parking in a specific area and get insight if there are spaces available? So show our customers parking prediction per street/area using our transaction history.

### Naive approach

The first reaction was, not surprisingly ... Machine Learning. And here we go: people started to argue whether it should be TensorFlow or AWS SageMaker, should we use the data from Amsterdam or from Paris, how accurate must be the prediction and so on and so forth. People that know absolutely nothing about the data science or machine learning, those suddenly turned into cool experts and with the very smart face tried to show off their intelligence. Tell you what, the Machine Learning is as useless here as a blockchain. Never start from technology!

### Right approach

We returned back to the drawing board. This time we focus on the most important thing: **what** we are trying to solve, rather than **how**. And immediately an excellent question popped up: are we reinventing the wheel, i.e. is there already existing solution on a market? The research shows three main approaches to the availability problem:

- Heatmap with colors indicating the occupancy on the street level. For example Parkmobile US:

![Parkmobile US](./images/parkmobile.png)

- Indication of how busy is the are, like Google Maps

![Google maps](./images/googlemaps.png)

- Exact number showing the available parking spots, like ParkMe

![Parkme](./images/parkme.png)

Ok, here we see where we can fill the gap and join the competition offering yet better solution. As agreed, these solutions are not solving the problem, but give you insight only. The problem is

> Whether I can park or not, taking into account my personal situation


TODO:
Note that we are taking into account the nearest future, hence the driver is not only a human, but the self-driving autonomous vehicle as well.