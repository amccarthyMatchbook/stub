'use strict';

var _ = require('lodash'),
  data = require('./data/users-data');

module.exports = function(app) {
  //GET
  app.get('/users', function(req, res) {
    res.status(200);
    console.log('test GET users');
    res.json(data.getUsers);
  });
}