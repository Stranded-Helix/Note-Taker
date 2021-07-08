const fs = require(`fs`);
const http = require(`http`);
const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

const handleRequest = (request, response) => {
    fs.readFile(`public/index.html`, (err, data) => {
        if (err) {
            console.log(`Failed to read`);
        }
        console.log("file read");
        response.end(data);
    })
}

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
})

// const server = http.createServer(handleRequest);

// server.listen(PORT, () => {
//     console.log(`Server listening on: http://localhost:${PORT}`)
// })