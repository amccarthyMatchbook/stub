/* jshint node:true */
"use strict";
var moment = require('moment');
require('dns-notfound-what');
var log = function(str) {
  return console.log(moment().format("[[]hh:mm[]][[]YYYY-MM-DD[]]"), str);
};

log('Starting Stub...');

var express = require('express');
var chalk = require('chalk');
var compression = require('compression');
var app = express();
var bodyParser = require('body-parser');
// set up body parser order important
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(compression()); // gzip compression
// addding modules for testing
var events = require('./resources/events')(app);
var sports = require('./resources/sports')(app);
var brokerageConfiguration = require('./resources/brokerage-configuration')(app);

app.get('/', function (req, res) {
  res.send('route');
});

var server = app.listen(1234, function() {
  log(chalk.green('Listening on port ' + server.address().port) );
});