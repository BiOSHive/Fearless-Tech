import express from 'express';

//adding UUID
import { v4 as uuidv4 } from 'uuid';

//initial router
const router = express.Router();

//create array if items equal to an array of objects from items.json
//these objects will not be stored its a mock database 
//going to make database empty to add items to it, for testing purposes, 
//i would remove this for production
const cubbyItems = [
    // {
    //     childsName: "Mikayla",
    //     itemName: "Diapers",
    //     quantity: 100
    // },

    // {
    //     childsName: "Myles",
    //     itemName: "Baby Wipes",
    //     quantity: 200
    // },

]

//create a request
router.get('/items', (req, res) => {   
    res.send(cubbyItems);
});

//adding items to database above 
//downloaded postman to test out post request
//http://localhost:3000/ to test post route 
router.post('/', (req, res) => {    
   const item = req.body; //items/objects  will be stored in body with this variable

  // const itemID = uuidv4() //adding id to database
   //const itemWithID = {...cubbyItems, id: uuidv4()} //assigning all objects or items an itemID 

   //refactored code to do the same function as the two lines above
   //to add the item to the database by id 
   cubbyItems.push({...item, id: uuidv4() }); 

       //message for client side 
    res.send(`Yay! ${item.childsName} cubby has been updated. He has ${item.quantity} ${item.itemName} in the database cubby`); 
});

//getting item by id 
router.get('/:id', (req, res) => {
    const { id } = req.params;

    const itemFound = cubbyItems.find((item) => item.id == id); 

    res.send(itemFound);
});

//deleting an item by id 
router.delete('./:id', (req, res) => {
    const { id } = req.params;

    //meisha 123 id, id to delete is equal to 123 then it will delete that item 

    //filtering array 
    //if true it will keep item in the array, if it is false it will remove item from array 
    cubbyItems = cubbyItems.filter((item) => true)

})

//export so that i can use in index.js file 
export default router;

//using postman to update data: 
// once downloaded, change to POST, select raw, text=json
//then add json data 

//installed uuid package for objects in database 