const fs = require('fs');
class DB {
    static saveNoteData(note){

        console.log(note.title, note.text);

        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if(err) return console.log(err);

            const db = JSON.parse(data);
            db.push(note);

            fs.writeFile('./db/db.json', JSON.stringify(db, null, 2), 'utf8', (err)=> {
                if(err) return console.log(err);

                console.log('Saved')
            })
        })
    }
}

module.exports = DB;