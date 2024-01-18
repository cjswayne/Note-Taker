// look into styling app, then work on matching up get/fetch/etc requests from backend to front end
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const path = require('path');
const PORT = 3333;
const DB = require('./DB')

app.use(bodyParser.json())

app.use(express.static('public'));

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db.json'))
})

app.post('/api/notes', (req, res) => {

    const note = req.body;

    DB.saveNoteData(note);

    // console.log('Saved')
})

app.listen(PORT, () => {
    console.log('Server started on port', PORT);
})