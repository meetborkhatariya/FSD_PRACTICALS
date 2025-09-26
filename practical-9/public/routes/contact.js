// routes/contact.js
const express = require('express');
const router = express.Router();

// Simulated contact storage
router.post('/', (req, res) => {
    const { name, email, message } = req.body;
    console.log("New Contact Message:", { name, email, message });
    res.json({ status: 'success', message: 'Thank you! We received your message.' });
});

module.exports = router;
