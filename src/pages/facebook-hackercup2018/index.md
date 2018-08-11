---
title: "Facebook Hackercup. 5 tips"
date: "2018-08-11T10:45:00Z"
author: "Sergey Zavoloka"
authorProfileLink: "https://github.com/zavolokas"
---

It is always interesting to measure your skills in problem solving. One of the ways to check how good you are, is to participate in Facebook Hackercup. If you consider participating next year - I'd like to share my top 5 learnings from this year.

### 1. Train yourself to understand challenge quickly 
Challenges' descriptions are huge. You have to be very attentive to get it right. After the problem is understood, it needs to be translated into a technical problem. You can train this skill using the [challanges from previous years](https://www.facebook.com/hackercup/past_rounds/1825579961046099/).

### 2. Solve without coding first
Every challenge has a sample input and output. Use this information. Although it is tempting to start coding right away, try to solve it step by step on paper or on a white board. Make sure that you have the same output. 

This approach will help you to see patterns or even to find a simple solution. For example here is one of the challenges:

>Consider an N-degree polynomial, expressed as follows:
>
>$$P_N * x^N + P_N-1 * x^N-1 + ... + P_1 * x^1 + P_0 * x^0$$
>
>You'd like to find all of the polynomial's $x$ ( 
>all distinct real values of $x$ for which the expression evaluates to $0$).
>
>The order of operations has been reversed: Addition ($+$) now has 
>the highest precedence, followed by multiplication ($*$), followed by exponentiation (^). 
>
>Constraints: $P_N ≠ 0$

After reading this you might think that this problem is somehow similar to [3-sum problem](https://en.wikipedia.org/wiki/3SUM). However if you put it down on paper or whiteboard it will be obvious that the solution is quite simple:
- The polynomial can be evaluated to $0$ when $x = 0$ and polynomial's degree is odd.
- Otherwise it cannot be evaluated to $0$.

The code in the end will be simply:

```python
def calculatePolynomialInterceptions(degree)
    if degree % 2 !=0:
        return [0.0] # the only possible solution
    else:
        return [] # no such x
```

<details><summary>Explanation</summary>
<p>

It might take some time to realise how a polynomial would look like after applying new operations order. It is better to take something like $N=3$ and write it down as:


$P_3 * x$ ^ $3 + P_2 * x$ ^ $2 + P_1 * x$ ^ $1 + P_0 * x$ ^ 0

According to the order of operations it should look as following:

$(P_3 * x)$ ^ $((3 + P_2) * x)$ ^ $((2 + P_1) * x)$ ^ $((1 + P_0) * x)$ ^ $0$

From that we can see that we have $(P_3 * x)$ as a base and the rest as an exponent. We will refer to the exponent as $a$:

$a = ((3 + P_2) * x)$ ^ $((2 + P_1) * x)$ ^ $((1 + P_0) * x)$ ^ $0$

and will get the expression:

$$P_3 * x ^ a = 0$$ 

Since $P_3 ≠ 0$ according to the problem description, the polynomial can be evaluated to $0$ only and only when $x = 0$ and $a ≠ 0$. 

We have found the $x$ and the only thing we need to do is to make sure that $a ≠ 0$, otherwise $P_3 * 0^0 = P_3$. 

Let's take a look at $a$. Since $x = 0$, we will get:

$a = ((3 + P_2) * 0)$ ^ $((2 + P_1) * 0)$ ^ $((1 + P_0) * 0)$ ^ $0$

$a = 0$ ^ $0$ ^ $0$ ^ $0$

$a = 1$

The answer is that the *3rd-degree* polynomial does evaluate to $0$ only and only when $x = 0$. However if it would be *2nd-degree* polynomial, it does not evaluate to $0$ for any real value $x$:

$a = 0$ ^ $0$ ^ $0$

$a = 0$

$P_2 * x^0 = P_2 * 1 = P_2 (≠ 0)$

It turns out that the final solution of this problem is quite easy - we just need to check whether the polynomial degree is odd, and if it is so then it can be evaluated to $0$ when $x = 0$.

</p>
</details>

### 3. Use brute force and improve
Use a naive approach and solve a problem as quick as possible. Once you have a solution ask yourself following questions and try to improve these aspects if an answer is positive:
- Are there bottlenecks?
- Are there duplicated work? 
- Are there useless work?

### 4. Solve and reverse engineer your thought process
Forget about your CS skills and try to solve a problem as a human or as a small kid. Got a solution? Reverse engineer your thought process and convert it into an algorithm.

### 5. Be careful about details
Once the code is written, check it twice. Pay attention to boundary cases. 
- 0-indexed vs 1-indexed? 
- Is there code where you add or substruct 1? Is it correct?
- Are there comparisons? Should the comparisons be strict? (*greater* or *greater or equal*)?
- Do you handle incorrect input?

These were my learnings from this year Hackercup. Some of them were crucial. Solve challenges and have fun! Good luck!