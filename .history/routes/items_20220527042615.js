import express from 'express';

//initial router
const router = express.Router();

//create request
router.get('/items', (req, res) => {
    res.send('Welcome to the items route');
});