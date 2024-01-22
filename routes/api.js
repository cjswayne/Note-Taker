// Example of routes/api.js
const express = require('express');
const router = express.Router();
const { saveNoteData, getNotesData, saveNotes } = require('../db')
const { v4 } = require('uuid');

router.get('/notes', async (req, res) => {
    const notes = await getNotesData();
    if(notes){
       return res.send(notes)
    }

    return res.send({
        error:402,
        message: 'Couldn\'nt get notes data'
    });

})

router.post('/notes', async (req, res) => {

    const note = req.body;

    if(note){

        note.id = v4();

        await saveNoteData(note); 

        return res.send({
            message:'User added successfully'
        })
    }

    return res.send({
        error:402,
        message: 'Invalid Note'
    })
})

router.delete('/notes/:id', async (req, res) => {
    const notes = await getNotesData();

    const note_id = req.params.id;

    const filteredNotes = notes.filter(noteObj => noteObj.id !== note_id);

    saveNotes(filteredNotes);
    


})
// Export the router
module.exports = router;
