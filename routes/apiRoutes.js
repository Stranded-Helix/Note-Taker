const fs = require('fs');
const json = require('../db/db.json')


const htmlTemplate = `<li class="list-group-item">
Some Title
<a  href="/">
<i class="fa fa-trash delete-button"></i>
</a>
</li>`

const createListItemFromNote = (note) => {
    return (`<li class="list-group-item">
    ${note.title}
    <a  href="/">
    <i class="fa fa-trash delete-button"></i>
    </a>
    </li>`)
}

// console.table(notes);
// const notelist = [];
// notes.forEach((item) => {
//     notelist.push(createListItemFromNote(item));
// })

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        console.log("get route called");
        fs.readFile('./db/db.json', (err, data) => {
            if(err) {
                console.error(err);
            }
            try {
                let notes = JSON.parse(data);
                res.json(notes);
            } catch(exception) {
                console.error(exception);
            }

        })

    });

    app.post('/api/notes', (req, res) => {

    })
}