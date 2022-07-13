# Traffic Cameras
This is a web app made as a side project to practice web development

This project uses a public traffic Camera API containing the location and number of every Traffic camera in the City of Toronto. The camera images are updated every few minutes with images taken from traffic cameras located throughout the city of Toronto ON.

The camera list files can be found at: http://opendata.toronto.ca/transportation/tmc/rescucameraimages/Data

To run this web app simply download the zip folder ->unzip->go to the src folder-> and open index.html

In this project I use https://leafletjs.com to create and use a map with a marker and use javaScript to create functions in order to manipulate and use the api, 
I created a menu with dynamic menu items based on the traffic camera’s various locations. I then created an event listener using the DOM and continued to create a click handler in order to load the corresponding traffic camera images for each traffic camera listed in the menu.

![image](https://user-images.githubusercontent.com/59423827/178817206-6f62027f-a9c4-459d-b2e3-45a0b718d237.png)

![image](https://user-images.githubusercontent.com/59423827/178817300-c5a46454-32f1-43ea-a8f7-9b9a9cb99e83.png)
