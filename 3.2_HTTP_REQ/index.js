import express from 'express';
let app = express();

let port = 3000;

app.get('/contact', (req, res) => {
    res.send('<h1>Contact ME here:</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>My profile</h1>')
})

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
})