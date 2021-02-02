const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const superBowlObject = {
        tom: 'Tom Brady',
        patrick: 'Patrick Mahomes',
        joe: 'Joe Walker'
    }
    res.render('index.ejs', superBowlObject);
});

app.get('/positions', (req, res) => {
    const positionsArray = ['quarterback', 'running back', 'wide reciever'];

    res.render('positions.ejs', { positionsArray });
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`server running on port`, PORT);
});