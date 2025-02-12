import express from 'express';
import morgan from 'morgan';
let app = express();
let port = 3000;

app.use(morgan('combined'))

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})