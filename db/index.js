const fs = require('fs');
const path = require('path');
const DB_PATH = path.join(__dirname, './db.json')
async function saveNoteData(noteObj) {
    console.log(noteObj);

    // const notes = await fs.promises.writeFile(DB_PATH, JSON.stringify(noteObj, 2));
    // return JSON.parse(notes);
}

async function getNotesData(){
    const notes = await fs.promises.readFile(DB_PATH, 'utf-8');
    return JSON.parse(notes);
}


module.exports = {
    saveNoteData,
    getNotesData
};