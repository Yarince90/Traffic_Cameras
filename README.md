# Traffic Cameras
This is a simple web app made as a side project with the instructions of my professor for WEB222 as practice. It uses a public traffic Camera dataset containing the location and number of every Traffic camera in the City of Toronto. These datasets are updated every few minutes with images taken from this traffic cameras,
The camera list files can be found at: http://opendata.toronto.ca/transportation/tmc/rescucameraimages/Data

To run this web app simply download the zip folder ->unzip->go to the src folder-> click on index.html 
OR open with visual studio code and enter "npm start" on the terminal

In this project I use https://leafletjs.com to create and use a map with a marker and use javaScript to create functions in order to create a menu with dynamic menu items based on the traffic camera’s various locations. I then created an event listener using the DOM and then created a click handler in order to load the corresponding traffic camera images for each traffic camera listed in the menu.

The CSS / layout is not the greatest for this web app as I was focusing mostly in functionality more then appearance but will probably come back to it at a later date to fix it up a bit and make it look more presentable.

![image](https://user-images.githubusercontent.com/59423827/171318588-6a9d3b19-6f3d-4c01-9719-bf84d9de0667.png)
