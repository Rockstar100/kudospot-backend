
const express = require('express');
const router = express.Router();
const Kudos = require('../models/Kudos');

// Create Kudos
router.post('/', async (req, res) => {
    try {
        const kudos = new Kudos(req.body);
        await kudos.save();
        res.status(201).json(kudos);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get Kudos
router.get('/', async (req, res) => {
    try {
        const kudos = await Kudos.find().populate('sender').populate('receiver');
        res.json(kudos);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
