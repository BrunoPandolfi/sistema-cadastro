const express = require ('express');
const bodyParser = require('body-parser');
const path = require('path');
const api = require('../app/routes/router');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('dist'));

//console.log(__dirname);

app.use('/', api);

app.get('*', (req, res) => res.sendFile('index.html', { root: './dist'}));



module.exports = app;
