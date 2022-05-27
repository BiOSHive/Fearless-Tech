import express from 'express';

//initial router
const router = express.Router();

//create array if items equal to an array of objects from items.json
const cubbyItems = [
    {
        name: "Diapers",
        quantity: "100"
    }
]

//create a request
router.get('/items', (req, res) => {
    console.log(cubbyItems)
   
    res.send('Welcome, items route data displayed here' + ${cubbyItems});
});

//export so that i can use in index.js file 
export default router;