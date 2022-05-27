//using express inside this file 
//npm install --save express (in terminal )
import express from 'express';
import bodyParser from 'body-parser';

//named it itemsRoutes imported items.js file
import itemsRoutes from './routes/items.js';

//initial express app
const app = express();

//specify port of app 
//to update port change number here 
const PORT = 6000;

//this says that use json data within the body of the app 
app.use(bodyParser.json())

//to access items file, all routes in this file start with /items, that why i used only /
app.use('/', itemsRoutes);


//MARK: - create routes, using get, post, get by id, delete, patch request 
//this will route to root or home folder, 
//test: with console.log('IT IS ROUTING TO HOME FOLDER');  - to show in terminal
//test: res.send('Welcome to the Home Page'); - to show in browser
app.get('/', (req, res) => res.send('Welcome to the Home Page'));

//tell it to listen on port 3000, use back tics for temp string
app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`))

//install nodemod to update changes as they happen without refreshing console 
//npm install --save-dev nodemon, dev is used because its only for developement enviornments, nobody is running the server


