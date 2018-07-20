---
title: "Inpainting"
date: "2018-07-20T07:45:00Z"
author: "Sergey Zavoloka"
authorProfileLink: "https://github.com/zavolokas"
---

studying scintific papers, I followed different image processing online courses.

It took time, but still I achieved my goal and created a library that allowed 

```CSharp
var inpainter = new Inpainter();
var result = inpainter.Inpaint(imageArgb, markupArgb, donors);
result
    .FromArgbToBitmap()
    .SaveTo(resultPath, ImageFormat.Png)
    .ShowFile();
```

To inpaint or to perform the content-aware fill

What happened with the issues? (Next slide)

![Image](./assets/bridge_orig.jpg)
![Image](./assets/bridge_marked.png)
![Image](./assets/bridge_wex.png)
![Image](./assets/cheese_orig.jpg)
![Image](./assets/cheese_marked.png)
![Image](./assets/cheese_wex.png)
![Image](./assets/temple_orig.jpg)
![Image](./assets/temple_marked.png)
![Image](./assets/temple_wex.png)

Let me explain it shortly.
Suppose we have following image


![Image](./assets/inpaint/process001.png)

And we want to remove this gear


![Image](./assets/inpaint/process002.png)

So we need to find the values of these pixels. 


![Image](./assets/inpaint/process003.png)

There are more, but for the sake of simplicity we imagine that these are only six these.

How do we do that?

Let's start with finding a value of the pixel in the middle.(Next slide)


![Image](./assets/inpaint/process004.png)

In order to do that we will analize patches that contain this pixel. 

For the simplicity we will use patches of size 3x3  (Next slide)


![Image](./assets/inpaint/process005.gif)

The pixel is a part of 9 different patches. And what we going to do now. We will find a similar patch for each of these 9 at the picture and reconstruct the value based on statistics of the 9 patches. (Next slide)


![Image](./assets/inpaint/process006.png)

We have found a similar patch for one of the 9.

Here I'd like to make a small remark about how do we find patches (Next slide)


### Patch search
- Nearest Neighbour Field (NNF) 
- Amount of Patches = Amount of pixels 
  - 800 * 600 = 480 000
- Use PatchMatch 
  - Requires ~ 5 iterations

This part is basically the most time consuming in this method. We have to find a patch that is similar. We build a mapping that is called (Show first bullet) 

Nearest Neighbour Field. In order to build this mapping we need to go thru the enentire image **for each patch** and find its best match. Image contains (Next bullet) 

A plenty of patches. Naive approach suggests an algorithm that has a quadratic complexity. But (Next bullet)

There is a nice PatchMatch algorithm that allows to speed up his process significantly. More iterations we perform the precisier NNF becomes. 

Let's go back(Next slide)


![Image](./assets/inpaint/process007.png)

We get another similar patch using our NNF


![Image](./assets/inpaint/process008.png)


![Image](./assets/inpaint/process009.png)


![Image](./assets/inpaint/process010.png)


![Image](./assets/inpaint/process011.png)


![Image](./assets/inpaint/process012.png)


![Image](./assets/inpaint/process013.png)


![Image](./assets/inpaint/process014.png)

We have now patches that suggest us the value of the pixel

These are the values.(Next slide)


![Image](./assets/inpaint/process015.png)

And if we will take an average of the values(Next slide)


![Image](./assets/inpaint/process016.png)

We will get the more or less reliable value of the pixel

Lets set this value(Next slide)


![Image](./assets/inpaint/process017.png)

The process is repeated (Next slide)



![Image](./assets/inpaint/process_rest.gif)

for the each pixel in the area until all the values are not calculated (wait for it)

In the reality the image is bigger and pixels are smaller. That is why the whole process is done on an image pyramid.


![Image](./assets/inpaint/pyramids.png)

It is built by scaling down the original image by factor 2. After that we run the algorithm starting from the lowest scale and propagate the results to the upper level and perform processing.



<pre>







    for j < nnfBuildIterations
      nnf = ImproveNnf(nnf, image ..);


    



</pre>



<pre>







    for j < nnfBuildIterations
      nnf = ImproveNnf(nnf, image ..);

    image = Inpaint(image, removeArea, nnf, ..);
    



</pre>



<pre>




  for i < inpaintIterations
  {

    for j < nnfBuildIterations
      nnf = ImproveNnf(nnf, image ..);

    image = Inpaint(image, removeArea, nnf, ..);
    
  }


</pre>




<pre>
foreach level in pyramid.Levels
{
  image = level.GetImage();

  for i < inpaintIterations
  {

    for j < nnfBuildIterations
      nnf = ImproveNnf(nnf, image ..);

    image = Inpaint(image, removeArea, nnf, ..);
    
  }
  nnf = nnf.ScaleUp(..);
}
</pre>

I think now it should be obvious that the method is too expensive to be ran on a mobile device.
