'use strict';

var _ = require('lodash'),
  data = require('./data/events');

module.exports = function(app) {
  //GET
  app.get('/events', function(req, res) {
    res.status(200);
    console.log('test');
    res.json(data.getEvents);
  });
}