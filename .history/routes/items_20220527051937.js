import express from 'express';

//initial router
const router = express.Router();

cont

//create request
router.get('/items', (req, res) => {
    res.send('Welcome to the items route');
});

//export so that i can use in index.js file 
export default router;