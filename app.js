var bodyParser = require('body-parser');
var express = require('express');
var mongoose = require('mongoose');
var opn = require('opn');

var app = express();
var port = 9000;

app.use(express.static('./app/public/'));

app.get('*', function(req, res) {
  res.sendfile('app/public/index.html');
});


app.listen(port, function() {
  console.log('Listening on port' + port);
  opn('http//localhost:' + port);
});
