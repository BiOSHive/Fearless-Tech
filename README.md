# Fearless-Tech-PurpleCowProject

*** I CREATED A BACKEND DATABASE FOR A FUTRUE WEBSITE & APP ***


# ********** HOW TO RUN THE FILE **********
 ## **on a MAC: 
- download zip folder from GitHub - PurpleCowProject 
- open zip folder with IDE (like VSCode) 
- click on index.js file 
- open terminal in vscode
- Run the following command in the terminal: npm start 
*this will start the file https://localhost:3000 *

- click or copy and past http://localhost:3000 into your web browser (any browser is fine, chrome or safari) 
- you should see the follow message to let you know you have successfully launched the browser: " Welcome to the Purple Cow project!" 


# ** LETS ADD USER DATA**
*THIS IS A MOCK DATABASE for time purposes a real database will be built out later 
*WE WILL USE www.postman.com download version (not web) to add, update, read and remove items from the mock database*

- download postman.com to update remove and add items to the database 
- we will use the get() function to retrieve items to the array 
- we will use the post() function to add items to the array 
- we will use delete() function to remove items 

# ** USING POSTMAN TO NAVIGATE THE MOCK DATABASE 
inside postman download version(not web) 

## **To read objects in the database...using GET
- make sure your tab is on GET 
- you select params tab 
- make sure your terminal has local host running 
- copy localhost path https://localhost:3000  into the url box inside postman
- hit send button

* you should see below in the body window that it says Welcome to purple cow project 

## *To add items in a database you we need to use POST 
- select POST 
- make sure url says the following: http://localhost:3000/
- select body
- select raw from the drop down
- text type should be json 

**add the following sample json data to the middle window: 
{
    "childsName": "Mikayla",
    "itemName" : "blocks",
    "quantity": 10
}

- you should see the following message below after you hit send to add the object to the database: 
"Yay! Mikayla cubby has been updated. Mikayla has 10 blocks in the database cubby"

- you can add this json data as many times as you want.
 changing the text within the " " to the right of the : is okay, changing the number is okay as well. 
 once you change the json data info hit send again. 
 * to see the data that is currently in the running application change to GET and make sure the url says: http://localhost:3000/items, 
 *then hit send to see data 
 
 ## *To update items in the database you we need to use PATCH 
- make sure you run npm start if you have to restart your app
- change to PATCH in postman app
- make sure url is: http://localhost:3000/items/ 'enter object id here'

*getting object id:
- run GET with url as: http://localhost:3000/items
- copy item/object id 
- change to PATCH with url as: http://localhost:3000/53993d39-bb0d-4a1b-bcd1-dbe99409b020 
 *note: that the id number on the end should be based on the id number you copy from runnnig the GET function and copying an items ID
- update the middle window with only the objects you want to update.
- hit send
- once its successful you will see this message: "User with id: 53993d39-bb0d-4a1b-bcd1-dbe99409b020, has been updated."
 
## FUTURE UPDATES AND CHANGES
*ASSUMPTIONS THAT MAY AFFECT THE CHANGES TO COME
- will build out the frontend using HTML, CSS with react 
- making these changes may require I change or update the routes and controllers folder, the functions and add in new files and modules


## DOCKER SETUP 
*Docker file path - dockerfile fixed 
*use this command to fix docker file errors, it compiled fine 

#creating container with all files: 
 docker build -f DockerFile . 
 
 #naming container myapp:
 docker build -f DockerFile -t myapp .
 
 #running the myapp with docker:  
 docker run myapp 
