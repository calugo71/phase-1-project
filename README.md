# phase-1-project

For many users, their drink choice of preference is as vital to their personality as their sense of style, musical tastes, etc. 

For this web page, we have devised a quiz to find out 'What's Your Spirit?!" based on what drink captures the user's eye. 

Firstly, we had to find an appropriate API. The Cocktail DB API had many options, but would not provide the additional information in each fetch request that we wanted to render for our cards. Ultimately, we went with a cockatil API provided by API Ninja, as it would provide ingrediants and instructions in each returned object. 

Once we had the right API for our page, we tested the the results of our GET request in a form submisiion. The form would search for drinks that included an ingrediant or dink name, and return single or multiple drinks that met the parameter. Now that we were receiving the data with the compnents that we needed, in the fashion that we wanted, we wanted to render out waht we were getting following the wireframe found in WireFrameExample.png found in this file. 

Now that we had our cards rendered into the body of our page, the name and/or ingrediants of each drink is prominently displayed onthe cards face. Wichever one captures the user's eye, they will be able to see instructions on how to make each drink by hovering their mouse over the card. 

Next, when a user picks a drink that most speaks to them, they will be able to click a button that will play a locally hosted mp3 file that correlates to their drink search. 

Finally, we wanted to add something so that the page isn't too bare when first rendered. In the spirit of the project, we picked a gif of the bar scene from 'The Other Guys', which goes with our drink-themed page, and adds a few laughs. 