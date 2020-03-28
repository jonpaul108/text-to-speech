const express = require('express');
const path = require('path');
const app = express();

const port = 3010;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/home', (requ, res) => res.status(200).send('Hello World'));

app.listen(port, () => console.log(`Running on port:${port}`));