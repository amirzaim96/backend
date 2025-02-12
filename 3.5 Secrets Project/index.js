//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from 'express';
import bodyParser from 'body-parser';
import {dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url))

let app = express(); 
let port = 3000;
let isAuthorised = false;

app.use(bodyParser.urlencoded({extended: true}))

//cara lain 1
function checkPassword (req, res, next) {
    let pWord = req.body['password'];
    if (pWord === 'ILoveProgramming') {
        isAuthorised = true;
    }
    next();
}

app.use(checkPassword)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

// cara lain 1
app.post('/check', (req, res) => {
    if (isAuthorised) {
        res.sendFile(__dirname + '/public/secret.html')
    } else {
        res.redirect('/')
    }
});

// cara aku
// app.post('/check', (req, res) => {
//     console.log(req.body);
//     let pWord = req.body['password'];
//     if (pWord === 'ILoveProgramming') {
//         res.sendFile(__dirname + '/public/secret.html')
//     } else {
//         res.redirect('/')
//     }
// })

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
