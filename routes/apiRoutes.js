const fs = require('fs');
const json = require('../db/db.json')

const filename = './db/db.json'

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        fs.readFile(filename, (err, data) => {
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
        fs.readFile(filename, (err, data) => {
            if(err) {
                console.error(err);
            }
            try {
                let notes = JSON.parse(data);
                notes.push(req.body);
                fs.writeFile(filename, JSON.stringify(notes), () => console.log("db.json updated"));
                res.json("Notes updated");
            } catch(exception) {
                console.error(exception);
            }
        })
    })

    app.delete('/api/notes/:id', (req, res) => {
        fs.readFile(filename, (err, data) => {
            if(err) {
                console.error(err);
            }
            try {
                let notes = JSON.parse(data);
                notes.splice(req.params.id, 1);
                fs.writeFile(filename, JSON.stringify(notes), () => console.log("db.json updated"));
                res.json(notes);     
                
            } catch(exception) {
                console.error(exception);
            }
        })
    })
}