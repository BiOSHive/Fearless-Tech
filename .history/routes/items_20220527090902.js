import express from 'express';

//initial router
const router = express.Router();

//create array if items equal to an array of objects from items.json
const cubbyItems = [
    {
        itemName: "Diapers",
        quantity: 100
    },

    {
        childsName
        itemName: "Baby Wipes",
        quantity: 200
    },

]

//create a request
router.get('/items', (req, res) => {
    console.log(cubbyItems)
   
    res.send(cubbyItems);
});

//adding items to database above 
//downloaded postman to test out post request
router.post('/', (req, res) => {
    //
});

//export so that i can use in index.js file 
export default router;

//using postman to update data: 
// once downloaded, change to POST, select raw, text=json
//then add json data 