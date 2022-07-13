# Traffic Cameras
This is a simple web app made as a side project for my WEB222 (Web Programming Principles) class at Seneca for my Computer Programming program as practice. 

This project uses a public traffic Camera dataset containing the location and number of every Traffic camera in the City of Toronto. These datasets are updated every few minutes with images taken from traffic cameras located throughout the city of Toronto.

The camera list files can be found at: http://opendata.toronto.ca/transportation/tmc/rescucameraimages/Data

To run this web app simply download the zip folder ->unzip->go to the src folder-> and open index.html 
OR open the unzipped folder with visual studio code and enter "npm start" on the terminal

In this project I use https://leafletjs.com to create and use a map with a marker and use javaScript to create functions in order manipulate and use the dataset, 
I created a menu with dynamic menu items based on the traffic camera’s various locations. I then created an event listener using the DOM and continued to create a click handler in order to load the corresponding traffic camera images for each traffic camera listed in the menu.

The CSS / layout is not the greatest for this web app as I was focusing mostly in functionality more then appearance, however I will probably come back to it at a later date to fix it up a bit and make it look a little better.

![image](https://user-images.githubusercontent.com/59423827/178817206-6f62027f-a9c4-459d-b2e3-45a0b718d237.png)

![image](https://user-images.githubusercontent.com/59423827/178817300-c5a46454-32f1-43ea-a8f7-9b9a9cb99e83.png)
