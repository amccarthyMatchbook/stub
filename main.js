var express = require('express');
var app = express();
var events = require('./resources/events')(app);

app.get('/', function (req, res) {
  res.send('route');
});

app.listen(1234, function () {
  console.log('Example app listening on port 1234!');
});