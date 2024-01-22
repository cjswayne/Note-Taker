// Example of routes/api.js
const express = require('express');
const router = express.Router();
const { saveNoteData, getNotesData } = require('../db')


router.get('/notes', async (req, res) => {
    const notes = await getNotesData();
    res.send(notes)
})

router.post('/notes', (req, res) => {

    const note = req.body;

    saveNoteData(note); 

    res.send('User Added')

})

// Export the router
module.exports = router;
