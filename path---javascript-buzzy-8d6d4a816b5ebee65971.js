webpackJsonp([0xc174bbd8130c],{511:function(t,e){t.exports={data:{site:{siteMetadata:{title:"For Enablers",author:"Kyle Mathews"}},markdownRemark:{id:"/home/travis/build/forenablers/forenablers.github.io/src/pages/javascript-buzzy/index.md absPath of file >>> MarkdownRemark",html:'<h2>Buzzy statement</h2>\n<p>Once I came across this weird statement written in Javascript:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">++[[]][+[]]+[+[]]</code></pre>\n      </div>\n<p>Being sure that I am pretty good in Javascript, I was trying to figure out whether or not this weird statement is valid. If so, what is the result?</p>\n<p>Let’s sort it out together. In order to decode the statement we should split it into the parts. At first glance, you would split it on four groups as following:</p>\n<p><mark> ++[[]][</mark> + <mark>[]]</mark> + <mark> [</mark> + <mark> []] </mark></p>\n<p>However, the correct break-down would be two groups as follows:</p>\n<p><mark>++[[]][+[]]</mark> + <mark>[+[]]</mark></p>\n<p>The statement consists of two parts: leftmost and righmost. Now, the easiest part to analyze is the rightmost. Let’s have a look closer. We are dealing with an array declared in a literal way:</p>\n<p>[+[]] == [] == new Array()</p>\n<p>Wait, but how to treat this statement inside the array?</p>\n<p>+[]</p>\n<p>The main thing to answer is what the operator + is doing here. Statement written in such form is interpreted as a number, because + acts as unary operator:</p>\n<p>+[] == Number([])</p>\n<p>Outputting this via alert() function get us 0, i.e. converting an empty array to a number returns 0. Here is how the function Number() works:</p>\n<p>Attempts to convert an array to Javascript primitive type by calling internal toPrimitive() function\nIn turn, toPrimitive function triggers valueOf() function. If result is primitive, return it\nOtherwise, calls toString() function. Return primitive (if any)\nApply toNumber() to the result\nSimply, [].valueOf() returns the array itself. Then the call [].toString() is made, which returns an empty string which, in turn is converted to 0 by calling ToNumber() internal function. So that the rightmost part can be re-written as follows:</p>\n<p>[<mark>+[]</mark>] == [<mark>0</mark>]</p>\n<p>Now, the process is pretty similar to what we have already seen and we do know that the result of this single statement is also 0*. Let’s take a look at the leftmost part of the statement and pay attention to its rightmost part. The statement can be transformed as this:</p>\n<p><mark>++[[]] </mark> <span style="background-color: #3598ff">[+[]]</span> + <span style="background-color: #3598ff">[+[]]</span> == <mark>++[[]] </mark><span style="background-color: #3598ff">[0]</span> + <span style="background-color: #3598ff">[0]</span></p>\n<p>Surprisingly, here we are dealing with an array, again. And we remember that empty array is converted to empty string or to the 0 when conversion to number takes place. Leftmost part of the statement is really simple now:</p>\n<p>++<a href=""><mark>[]</mark></a> == ++<a href=""><mark>""</mark></a></p>\n<p>Basically, this is an array where the indexing is applied, i.e element with 0 index is retrieved. Then the result is incremented by 1, which in turn causes its conversion to the number:</p>\n<p>++<a href="">""</a> == ++0</p>\n<p>Huray, here is the final statement:</p>\n<p>++[[]][+[]] + [+[]] —> ++0 + [0] == 1 + 0 == 10</p>\n<p>Huh?? Ok, what’s going on now? I am sure you did notice the * somewhere above. The righmost part was evaluated to 0, even more - to “0”, which is a string. Hence we saw the string concantenation rather than numerical sum.</p>\n<p>And as a bonus, be sure you can now explain the result for these statements:</p>\n<p>++[[1],[2]][+[]] = 2\n[1,2]+[3] = <a href="1,1,1">1,23</a>+(1,1,1)+(1,1,1) = 3</p>',frontmatter:{title:"Weird Javascript: Buzzy statement",date:"February 10, 2017"}}},pathContext:{slug:"/javascript-buzzy/",previous:null,next:{fields:{slug:"/hackatrain2018/"},frontmatter:{title:"Hackatrain 2018"}}}}}});
//# sourceMappingURL=path---javascript-buzzy-8d6d4a816b5ebee65971.js.map