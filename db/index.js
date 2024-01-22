const fs = require('fs');
const path = require('path');
const DB_PATH = path.join(__dirname, './db.json')


// GETTING note data
async function getNotesData(){
    const notes = await fs.promises.readFile(DB_PATH, 'utf-8');
    return JSON.parse(notes);
}
// SAVING new note
async function saveNoteData(noteObj) {

    const notes = (await getNotesData());


    notes.push(noteObj);

    await saveNotes(notes);

}

async function saveNotes(notes){
    await fs.promises.writeFile(DB_PATH, JSON.stringify(notes, 2));
}

module.exports = {
    saveNoteData,
    getNotesData,
    saveNotes
};