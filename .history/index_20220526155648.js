//using express inside this file 
//npm install --save express (in terminal )
import express from 'express';
import bodyParser from 'body-parser';


//initial express app
const app = express();

//specify port of app 
const PORT = 3000;

//this says that use json data within the body of the app 
app.use(bodyParser.json())

//tell it to listen on port 3000, use back tics for temp string
app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`))

//install nodemod to update changes as they happen without refreshing console 
//npm install
