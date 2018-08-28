webpackJsonp([0xcd59e26a3fa3],{524:function(e,A){e.exports={data:{site:{siteMetadata:{title:"For Enablers",author:"Kyle Mathews"}},markdownRemark:{id:"/home/travis/build/forenablers/forenablers.github.io/src/pages/hackathon-availability/index.md absPath of file >>> MarkdownRemark",html:'<p>It’s been a week since our regular hackathon at Parkmobile and it’s a good time to recap and share key takeaways. The aim of the hackathon was to find innovative solutions that improve the life of drivers dealing with the parking challenges. I teamed up with a few like-minded people and we focused on Parking Availability challenge. Here I am going to deep-dive into the availability problem and share our findings.</p>\n<h3>The challenge</h3>\n<blockquote>\n<p>As a customer I want to search for parking in a specific area and get insight if there are spaces available? So show our customers parking prediction per street/area using our transaction history.</p>\n</blockquote>\n<h3>Naive approach</h3>\n<p>The first reaction was, not surprisingly … Machine Learning. And here we go: people started to argue whether it should be TensorFlow or AWS SageMaker, should we use the data from Amsterdam or from Paris, how accurate must be the prediction and so on and so forth. People that know absolutely nothing about the data science or machine learning, those suddenly turned into cool experts and with the very smart face tried to show off their intelligence. Tell you what, the Machine Learning is as useless here as a blockchain. Never start from technology!</p>\n<h3>Right approach</h3>\n<p>We returned back to the drawing board. This time we focus on the most important thing: <strong>what</strong> we are trying to solve, rather than <strong>how</strong>. And immediately an excellent question popped up: are we reinventing the wheel, i.e. is there already existing solution on a market? The research shows three main approaches to the availability problem:</p>\n<ul>\n<li>Heatmap with colors indicating the occupancy on the street level. For example Parkmobile US:</li>\n</ul>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/parkmobile-0cc5a76ae619783821f0399947e581c3-4b9cf.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 231px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 126.83982683982684%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,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\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Parkmobile US"\n        title=""\n        src="/static/parkmobile-0cc5a76ae619783821f0399947e581c3-4b9cf.png"\n        srcset="/static/parkmobile-0cc5a76ae619783821f0399947e581c3-d4159.png 148w,\n/static/parkmobile-0cc5a76ae619783821f0399947e581c3-4b9cf.png 231w"\n        sizes="(max-width: 231px) 100vw, 231px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<ul>\n<li>Indication of how busy is the area, like Google Maps:</li>\n</ul>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/googlemaps-9e300d5f77b992f54f4dd3d12fddcd3f-935c1.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 580px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 75.17241379310344%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAA7CAAAOwgEVKEqAAAADCElEQVQ4y22TW08bZxCGfYfEn+A/8TP4AyjggLiq1Juo6k2bSpXS3BSpaoga1LTlpOYgakPA4LO99rIn78lrG9tre7H9dHYVohr6SaPZT7vz6J2Zd1PD4QBFL6GaCo7j0gsccnWX45zPSeWYVxenmHabfOESzXII2m0sT0Vr1fA8j8FgwHw+Jz5xTo1GYzptj1tfo6nUqBavOM8VOS+18LsmLc+g67XoahlMvYmhVrAtE8u0RYDzGBgOQ3TNQFeK2DdZbr08BcXlQ95j3BWoY0mhjtO8whVFvlXHdR08W8dzbYbD4RdYAuwNAgGcoukG3/1u89XrPs/fury/kkJdIDIO365gVM5oBwEd18D3fTq+tO+6AgwXgX5/zNtCFtOt8cuHPi9P+jzbs/jt76zMqUGxWpcONAL9msBzaZoFVKsgagOcbpv+Q4XBYMqPGXhXNZmNfDxL4d0/57zKBjQODggKOfLVGq76iW5LoZj7EytQ6DYsOn+dMbQdprPp5zkKsDOIeJGd8yIzJ9MYUamWKedOqNxofHr+DXvffo+i5HBMFVur4ErWdJlfuYH78zF+uUZPFnQX3REjReEdL8/m/HAKr69nMhubUJZhqzmuPx6QOdqj37pEVVVMs5W0N5aYSUzjmM2Z3olCybPZTID9iJ8y0vbpnF8vIvGgz0XVxVJPuclm6b3P0BEP6meX+AIcjUeE5xlCQyeaThmFIePJmKk8J8CJSLV7Y6xuiNOL0LwQI4gIZKMTz2d8GzIJRwy6XSyrlSzI+3oH6499DL9NvVqlXq8TCjjuOTUTckesk29VUNym+Et859l49Spe5iOGmLc/6CcFvV6PSRQxnUw+b5WFkyi8d3kylDj956twEvHwTATmuB7lighQlARyD0ts44o5t7a2eLLxhPTTNNvb22xubrK5scHTdJqdnR3SkuNYX19P3sctPlR2D06VSiVSqdSXWFpaWrgvLy8/er+yssLq6ipra2vE9QsK47kcHR1xICb+vzg8PHx0f7O/z+7ubhK2bS/8Kf8CBHceMOkUkKMAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Google maps"\n        title=""\n        src="/static/googlemaps-9e300d5f77b992f54f4dd3d12fddcd3f-935c1.png"\n        srcset="/static/googlemaps-9e300d5f77b992f54f4dd3d12fddcd3f-73f02.png 148w,\n/static/googlemaps-9e300d5f77b992f54f4dd3d12fddcd3f-01593.png 295w,\n/static/googlemaps-9e300d5f77b992f54f4dd3d12fddcd3f-935c1.png 580w"\n        sizes="(max-width: 580px) 100vw, 580px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<ul>\n<li>Exact number showing the available parking spots, like ParkMe:</li>\n</ul>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/parkme-4c6bdc7c6c70ff39de4b36e1a3b33d59-28d9a.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 52.07439198855508%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAA7CAAAOwgEVKEqAAAACUklEQVQoz12Ry08TURSH+we6Iu7cGONCtsQFiSzcEIOJuJBEV0aNcaFREyFEAgSlSEtTXpUWWhWZttPpa5537rw67ectxcR4kpv7PN/53d/J3FoqMPPikOlnBW4v5Zh9dcBKrsa7rTKrhd+sH+p8KbVY/Fji2vw21x/uMLWQZerv/N/IrO1VyRYrPF7TufGyy+tsi+KZzk6pSeHUoHDW4ehHm8Nai91yi1ylRb5iqKHWZZ28epO/Ot9V+8yrgmR2RTL9IeTm25j5jZCFTXk531sNuLsc8mbPRpht0jgklh6+axH6HmkkGcYBQWCru4BBKMkcn1TYLp6yX9U5103O6iYVzaRQrrNzfE72+IKq1sXs9/F9n263S13TiMKA0WhEnCRo/TqO5+I6LpnBtwcEp8voRodex8C1+6RJiCpJohQ5IqLf6+HYNr7n4XqCZk9gByPCZMQwHSCFjxBCFRRkCE2k08UwdCVdEoYRgzRlHCMm0Ww2MU31TnjYfsy+FlO4iPjecBEyxA8ilRciVMFMWnyCqG7QMHq0FdTsmwTqchyDdIgfQeMKOAg8cuchM58kj7ZSnudg7nPM/fUIy5Oq4Fih7CDtNu22oXwJSZQnw+FQyRsp4IhoMAbq2JZFIH0M00HTY97/3OZOfo6aZvPLcHEcgXB7SuHBU/zaJl1LIJUH/wITpdBRYuuN5mVTxl9yHIvY9skZX1k8WWAoVJf9MayLbx2NPbSQitxsaFhmnyiOJ0DlYDpUXUwnXx4rlKrLE6ijciSJSLBtB0/l+1YJ4Wj8AW7s0b5xKvpQAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Parkme"\n        title=""\n        src="/static/parkme-4c6bdc7c6c70ff39de4b36e1a3b33d59-fb8a0.png"\n        srcset="/static/parkme-4c6bdc7c6c70ff39de4b36e1a3b33d59-1a291.png 148w,\n/static/parkme-4c6bdc7c6c70ff39de4b36e1a3b33d59-2bc4a.png 295w,\n/static/parkme-4c6bdc7c6c70ff39de4b36e1a3b33d59-fb8a0.png 590w,\n/static/parkme-4c6bdc7c6c70ff39de4b36e1a3b33d59-28d9a.png 699w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>We quickly figured out that these existing approaches are not solving the <strong>availabilty</strong> problem as we see it. They rather give you an insight on what’s going on. But the problem is:</p>\n<blockquote>\n<p>Whether or not I can park, taking into account my personal situation</p>\n</blockquote>\n<p>It’s different whether you drive luxurious 5 meter long BMW 5 Series vs Mini One. It does matter whether you are experienced driver or a rookie. Do you have small children with you? Then, perhaps, you do not want to park nearby in 15 minutes walking distance. Are you a student? Then, most likely you do not mind to park cheaper (outside of the city center) and walk 15-20 minutes. Are you by any chance driving an electric vehicle and need to charge it? Or you might be using the car sharing services and you are limited in options where you can leave the car.</p>\n<p>None of the existing solutions take your personal situation into account. And none of them answers whether or not you can park. All you see is the number or load distribution which is not enough to decide if you can park or not. We did a mini-survey to better understand the process of how people chose where to park. Most of us use the Google Maps to check street view and get an idea of how busy is the area. Some people go further and check the traffic and adjacent streets. Finally people evaluate the alternate transport, for example getting by car to the nearest P+R and then use the public transportation. And this is what we want to change and simplify for the user. Now, that the <strong>what</strong> is clear we focused on analyzing the edge cases that would affect the accuraccy of our solution.  </p>\n<h3>Edge cases</h3>\n<p> What if the parking lot seems to be vacant, but it is too narrow to park there? For example someone parked the car inappropriately.\n<img src="/idiot-e0dacb9bdf0e826dc4e426c27b290c82.gif" alt="Parking idiot"></p>\n<p>What if the parking lot is technically free, but far away from desired location? Or it’s raining and you need to walk through mud.\nWhat if the parking lot is technically free, but far away from desired location? Or it’s raining and you need to walk through mud.\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/parkingrain-2621feeebdcb84b1f152a2a66ad37e40-ba3b4.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.59947299077733%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAD/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAVwVDjIpr//EABoQAAMAAwEAAAAAAAAAAAAAAAABAhESITH/2gAIAQEAAQUCmJRoOO5ahsr3/8QAFhEAAwAAAAAAAAAAAAAAAAAAARAh/9oACAEDAQE/ARV//8QAFhEAAwAAAAAAAAAAAAAAAAAAAhAh/9oACAECAQE/ASi//8QAGxAAAQQDAAAAAAAAAAAAAAAAAAEQITEiMpH/2gAIAQEABj8C14YwWWI3/8QAGxABAAICAwAAAAAAAAAAAAAAAQARIUExUYH/2gAIAQEAAT8hMW/qJvTLFdJxKIxg7mOHU//aAAwDAQACAAMAAAAQd8//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREh/9oACAEDAQE/EMqRH//EABYRAQEBAAAAAAAAAAAAAAAAAAERAP/aAAgBAgEBPxAXDV3/xAAdEAEAAwACAwEAAAAAAAAAAAABABEhMWFBcZHB/9oACAEBAAE/EHpQuHL8YRPq2iPew0IvJv7NJizhjaQWj2TOYKT/2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Parking rain"\n        title=""\n        src="/static/parkingrain-2621feeebdcb84b1f152a2a66ad37e40-f8fb9.jpg"\n        srcset="/static/parkingrain-2621feeebdcb84b1f152a2a66ad37e40-e8976.jpg 148w,\n/static/parkingrain-2621feeebdcb84b1f152a2a66ad37e40-63df2.jpg 295w,\n/static/parkingrain-2621feeebdcb84b1f152a2a66ad37e40-f8fb9.jpg 590w,\n/static/parkingrain-2621feeebdcb84b1f152a2a66ad37e40-ba3b4.jpg 759w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>How many free parking spots you can see here?\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/illegalparking-d5fb2f76d163dc0fc890829bbd9bbbe8-37b79.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 458px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 70.52401746724891%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMBAgT/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAbswQMElz//EABoQAAMBAAMAAAAAAAAAAAAAAAABAhIREyH/2gAIAQEAAQUCVePLL4VOTrRlH//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/AUf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAcEAACAQUBAAAAAAAAAAAAAAAAARECEBIhQVH/2gAIAQEABj8CpWW4Zw9JV//EABoQAQADAQEBAAAAAAAAAAAAAAEAESExQVH/2gAIAQEAAT8hI9gIt7F3XXo8jwMa0D9tgF3pKOXP/9oADAMBAAIAAwAAABDjH//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/EEP/xAAXEQEAAwAAAAAAAAAAAAAAAAAAARFR/9oACAECAQE/EFzr/8QAHRABAQACAgMBAAAAAAAAAAAAAREAITFBUWFxkf/aAAgBAQABPxBmgAF9A3FYjwII631k8QQbRn5lYJvaOfhgibDiuLYieLn/2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Illegal parking"\n        title=""\n        src="/static/illegalparking-d5fb2f76d163dc0fc890829bbd9bbbe8-37b79.jpg"\n        srcset="/static/illegalparking-d5fb2f76d163dc0fc890829bbd9bbbe8-74959.jpg 148w,\n/static/illegalparking-d5fb2f76d163dc0fc890829bbd9bbbe8-e981c.jpg 295w,\n/static/illegalparking-d5fb2f76d163dc0fc890829bbd9bbbe8-37b79.jpg 458w"\n        sizes="(max-width: 458px) 100vw, 458px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>What if someone parked illegally and this prevents you from accessing the only available parking space?\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/parkingblocked-e168ad672e6a00d996d913a98b391daf-4cc40.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 49.85507246376811%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAEEA//EABUBAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIQAxAAAAGUc6bCC//EAB0QAAECBwAAAAAAAAAAAAAAAAABAgMREiExMkH/2gAIAQEAAQUCm1pU1C6kPTiY/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGhAAAQUBAAAAAAAAAAAAAAAAAAECECExcf/aAAgBAQAGPwJNNKHcn//EABkQAQADAQEAAAAAAAAAAAAAAAEAETEhQf/aAAgBAQABPyHEve+EyKbZpsuCJCkJTk//2gAMAwEAAgADAAAAEEg//8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAEDAQE/EI1//8QAFxEBAAMAAAAAAAAAAAAAAAAAAAERMf/aAAgBAgEBPxCcU//EAB0QAQACAgIDAAAAAAAAAAAAAAEAESExUWFxgZH/2gAIAQEAAT8QGKq8kQ6M5lgf2KhjitEFEEUXgv1CQQQwPsqNFeOppDXE/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Blocked parking"\n        title=""\n        src="/static/parkingblocked-e168ad672e6a00d996d913a98b391daf-f8fb9.jpg"\n        srcset="/static/parkingblocked-e168ad672e6a00d996d913a98b391daf-e8976.jpg 148w,\n/static/parkingblocked-e168ad672e6a00d996d913a98b391daf-63df2.jpg 295w,\n/static/parkingblocked-e168ad672e6a00d996d913a98b391daf-f8fb9.jpg 590w,\n/static/parkingblocked-e168ad672e6a00d996d913a98b391daf-85e3d.jpg 885w,\n/static/parkingblocked-e168ad672e6a00d996d913a98b391daf-d1924.jpg 1180w,\n/static/parkingblocked-e168ad672e6a00d996d913a98b391daf-4cc40.jpg 1380w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>There might be a false positive situation where the street is very busy in terms of traffic and it’s always occupied at 100%, but people constanly come and leave, hence waiting just 5 minutes will definitely give you a chance to park there. And the opposite: the street is half occupied, but once people park there they leave the car for the whole working day. Hence if you came there at 08:50 AM and there were 10 parking spots available, then at 09:00AM all of them will be taken and they will be free starting from 05:00PM and later.</p>\n<p>Consider scenario when there are a few parking spots available and you do not know if you should take the first one or drive further hoping that there is better spot closer to your target. It will be very frustrating if remaining parking spots are at the end of the street, whereas you skipped the one at the beginning of the street, right? It would be great if our tool is able to figure out all this and recommend you the best parking spot.</p>\n<p>Very soon we admitted that proper solution must take the user’s preferences into account. We need to know the original intention of the user in order to say ‘Hey, go and park here, this is the best parking spot for you’. The intention is a key here. The user wanted to park somewhere else, but for whatever reason our user could not park there. Why? If people can not park there, should we still send others there?</p>\n<p>Now, if we start collecting the users feedback, we will greatly improve the accurracy and solve the issues caused by the edge cases. Is there a free spot next to you? This would confirm that our prediction is correct, otherwise we adjust it. Was it easy to find parking lot here? If we predicted “easy to moderate” and the user says “hard” - we need to adjust our model. Was it convenient to park here or you would rather park somewhere else? Having the preferences and feedback we can recommend ‘best matches’ and the user does not need to waste time checking how many parking spots are available and then checking Google Maps to see the occupancy of an area and/or how to get to the desired location from parking place.</p>',frontmatter:{title:"Hackathon: Parking availability",date:"August 14, 2018",author:"Borys Generalov",authorProfileLink:null}}},pathContext:{slug:"/hackathon-availability/",previous:{fields:{slug:"/facebook-hackercup2018/"},frontmatter:{title:"Facebook Hackercup. 5 tips"}},next:null}}}});
//# sourceMappingURL=path---hackathon-availability-f529e312b51a8ca0dc58.js.map