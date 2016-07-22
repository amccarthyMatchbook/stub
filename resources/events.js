'use strict';

var _ = require('lodash'),
  data = require('./data/events-data');

module.exports = function(app) {
  //GET
  app.get('/events', function(req, res) {
    res.status(200);
    res.json(data.events);
  });
}