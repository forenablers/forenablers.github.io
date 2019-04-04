---
title: "Azure Functions vs AWS Lambda"
date: "2019-01-10T23:00:00Z"
author: "Borys Generalov"
authorProfileLink: "https://github.com/bgener"
---

How does AWS Lambda and Azure Function compare? Is it correct to say that knowing one, you more or less know the other one? Certainly there are some differences and specifics, but perhaps they are minor. Overall, it's the same concept, right? Or not?

_This blog post is not about benchmarking or performance comparisons nor answering the question which one is better. There are plenty of other resources addressing those questions. Here I focus on side-by-side comparison, including look & feel and features set. The target audience is the developers having experience with either of them and being curious of what's on the other side._

## Look and feel

### Create function

Creating the function is straightforward, only difference is that Azure offers more steps, i.e. first you need to create the App service, then add one or more Azure functions. Having multiple related functions grouped within single App service is a neat feature, something that AWS Lambda is missing.

| AWS Lambda |
| :---------  |
| ![](aws\create_from_scratch.png) |

| Azure Function                       |
| :----------------------------------- |
| ![](azure\create_func_quickstart.png) |

### Code designer

AWS Lambda code designer comes with IntelliSense which brings absolutely great user experience. In turn, the cool thing with Azure Function is the button "Upload" that lets you uploading code from your local machine.

| AWS Lambda |
| :---------  |
| ![](aws\code_designer.png) |

| Azure Function                       |
| :----------------------------------- |
| ![](azure\code_designer.png) |


## Deployment

Azure functions offer variety of deployments compared to AWS Lambda:

| Deployment                        | Azure Function | AWS Lambda |
| :-------------------------------- | :---------- | :--------- |
| Upload to Blob/S3 bucket          | Yes         | Yes        |
| CLI/PowerShell                    | Yes         | Yes        |
| WebDeploy (Deploy to File system) | Yes         | No         |
| Using FTP                         | Yes         | No         |
| Continuous Deployment             | Yes         | No         |
| REST APIs                         | Yes         | No         |

## Execution Environment

| Environment | Azure Function   | AWS Lambda         |
| :---------- | :------------ | :----------------- |
| Linux       | Yes (Preview) | Yes (Amazon Linux) |
| Windows     | Yes           | No                 |

