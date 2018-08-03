---
title: "Facebook Hackercup 2018"
date: "2018-08-01T10:45:00Z"
author: "Sergey Zavoloka"
authorProfileLink: "https://github.com/zavolokas"
---

Curious how good your skills are in problem solving in comparison to others? One of the ways to check is to participate in Facebook Hackercup.

### Why to participate? 

- Compare your skills
- Refresh your CS knowladge
- Train your brain
- Have fun


### What kind of challanges?
The challanges that you will find vary.

### What is a good approach to solve them?

Challange description is huge. It requires some attention to understand it completely. It is needs to be translated into a technical problem and what would be a solution. Train on the challanges from previous years.

It is very helpful to take an example and solve it step by step on paper or on a white board. 

- Allows to see patterns
- Allows to find a simple solution

// TODO: polynomial example

<details><summary>Example</summary>
<p>
<hr/>
Suppose we have following challange:

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

It might take some time to realise how a polynomial would look like after applying new operations order. It is better to take something like $N=3$ and write it down as:


$P_3 * x$ ^ $3 + P_2 * x$ ^ $2 + P_1 * x$ ^ $1 + P_0 * x$ ^ 0

According to the order of operations it should look as following:

$(P_3 * x)$ ^ $((3 + P_2) * x)$ ^ $((2 + P_1) * x)$ ^ $((1 + P_0) * x)$ ^ $0$

From that we can see that we have $(P_3 * x)$ as a base and the rest as an exponent. We will refer to the exponent as $a$ and will get the expression:

$$P_3 * x ^ a = 0$$ 

It can be evaluated to $0$ only in two cases. First when $P_3 = 0$ which is impossible according to the constraints. Second when $x^a = 0$. 


<hr/>
</p>
</details>

Solve it brute force and improve.

- What are the boundaries of the problem run-time regardless algorithm?
- Check where bottlenecks are and eleminate them
- Are there duplicated work? 
- Are there useless work?

Forget about your CS skills and try to solve this problem as a human or as a small kid. Got a solution? Reverse engineer your thoght process and convert it into an algorithm.

Once the code is written, check it twice. Pay attention to boundary cases. 

- 0 indexed / 1 indexed? 
- +1/-1?
- incorrect input