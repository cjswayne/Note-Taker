// Example of routes/api.js
const express = require('express');
const router = express.Router();

router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'))
})

router.post('/api/notes', (req, res) => {

    const note = req.body;

    // DB.saveNoteData(note); 

    // console.log('Saved')
})

// Export the router
module.exports = router;
