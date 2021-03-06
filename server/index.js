const express = require('express');
const path = require('path');
const app = express();
const textToSpeech = require('../utils/txtSpeech.js');
var bodyParser = require('body-parser');
const port = 3010;

app.use(express.static(path.join(__dirname, '../client/dist')));

// app.use(bodyParser.json())
const parser = bodyParser.json();

const tempData = [{text: 'Hello world. How are you?', sound: null}];

app.get('/home', (req, res) => {
    res.status(200).send(tempData)
});

app.post(`/audioData`, parser, (req, res) => {
    console.log('audio data tested: ', req.body);
    const data = ({text: req.body.data, sound: null });
    res.status(201).send(JSON.stringify(data));

})

app.listen(port, () => console.log(`Running on port:${port}`));