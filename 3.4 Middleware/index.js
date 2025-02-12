import bodyParser from 'body-parser';
import express from 'express';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url))

let app = express();
let port = 3000;
let bandName = '';

app.use(bodyParser.urlencoded({extended:true}))

function bandGenerator(req, res, next) {
    console.log(req.body);
    bandName = req.body['street'] + req.body['pet'];
    next();
}

app.use(bandGenerator);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/submit', (req, res) => {
    res.send(`<h1>This is your band name:</h1> <h2>${bandName}</h2>`);
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})