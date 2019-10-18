const express = require('express');
const { check, validationResult } = require('express-validator');
const bodyParser = require('body-parser')
var app = express();


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.render('index.ejs');
});

app.listen(3000, function(){
  console.log('Server listening on port 3000');
});
