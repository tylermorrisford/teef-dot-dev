const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(PORT, () => {
    console.log('app started on port: ' + PORT);
})