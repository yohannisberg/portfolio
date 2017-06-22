const express = require('express'),
    // app = module.exports = express(),
    massive = require('massive'),
    config = require('./config.js'),
    bodyParser = require('body-parser'),
    session = require('express-session');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));

app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`)
})
