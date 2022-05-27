//using express inside this file 
//npm install --save express (in terminal )
import express from 'express';
import bodyParser from 'body-parser';


//initial express app
const app = express();

//specify port of app 
const PORT = 3000;

app.use