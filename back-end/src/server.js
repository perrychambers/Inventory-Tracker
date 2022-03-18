const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Successful response.');
})

app.get('/home', (req, res) => {
    console.log('Time: ', Date.now())
})

app.post('/addItem', (req, res) => {
    // DB Query here with req object
    // name: req.name
    // item: req.item
})

app.listen(3000, () => console.log('listening on port 3000'))