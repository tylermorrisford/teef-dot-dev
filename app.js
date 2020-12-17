const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
})

app.get('/', function(req, res){
    res.sendFile(__dirname + '/favicon-16x16.png')
})

app.get('/', function(req, res){
    res.sendFile(__dirname + '/favicon-32x32.png')
})

app.listen(PORT, () => {
    console.log('app started on port: ' + PORT);
})