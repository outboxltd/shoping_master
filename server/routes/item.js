const express = require('express');
const router = express.Router();
const { Item } = require('../models/db');


router.get('/getAll', async (req, res) => {
    const items = await Item.find();
    res.send(items);
})

router.get('/getOne/:id', async (req, res) => {
    res.send(await Item.findById(req.params.id));
});


router.post('/add', async (req, res) => {
    await Item.create(req.body).catch(err => res.sendStatus(500));
    res.send(true);
});



module.exports = router;