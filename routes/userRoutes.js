const express = require('express');
const User = require('../models/User');
const router = express.Router();

// fetch all user endpoint
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({success: true, data: users});
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;