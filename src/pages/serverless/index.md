---
title: "Azure Functions vs AWS Lambda"
date: "2019-01-10T23:00:00Z"
author: "Borys Generalov"
authorProfileLink: "https://github.com/bgener"
---

How does AWS Lambda and Azure Function compare? Is it correct to say that knowing one, you more or less know the other one? Certainly there are some differences and specifics, but perhaps they are minor. Overall, it's the same concept. Let's sort it out.

_This blog post is not about benchmarking or performance comparisons nor answering the question which one is better. There are plenty of other resources addressing those questions. Here I focuses on side-by-side comparison, including look & feel and features. The target audience is developers having experience with either of them and being curious of what's on the other side._

## Deployment

Azure functions offer variety of deployments compared to AWS Lambda, check this out:

| Deployment                        | Azure Funcs | AWS Lambda |
| :-------------------------------- | :---------- | :--------- |
| Upload Zip to Blob/S3 bucket      | Yes         | Yes        |
| CLI/PowerShell                    | Yes         | Yes        |
| WebDeploy (Deploy to File system) | Yes         | No         |
| Using FTP                         | Yes         | No         |
| REST APIs                         | Yes         | No         |

## Execution Environment

| Environment | Azure Funcs   | AWS Lambda         |
| :---------- | :------------ | :----------------- |
| Linux       | Yes (Preview) | Yes (Amazon Linux) |
| Windows     | Yes           | No                 |
