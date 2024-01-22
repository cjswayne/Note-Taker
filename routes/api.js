// Get required packages
const express = require('express');
const router = express.Router();
const { saveNoteData, getNotesData, saveNotes } = require('../db')
const { v4 } = require('uuid');

// Route to return all notes
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

// Route to add new note
router.post('/notes', async (req, res) => {
    const note = req.body;
    if(note){
        // give id to note
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

// Route to delete note
router.delete('/notes/:id', async (req, res) => {
    const notes = await getNotesData();

    const note_id = req.params.id;

    // remove note from notes data
    const filteredNotes = notes.filter(noteObj => noteObj.id !== note_id);

    saveNotes(filteredNotes);
})

module.exports = router;