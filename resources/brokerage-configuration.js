'use strict';

var _ = require('lodash'),
  data = require('./data/brokerage-configuration-data');

module.exports = function(app) {
  //GET
  app.get('/admin/brokerage-configuration', function(req, res) {
    res.status(200);
    console.log('GET Brokerage Configuration');
    res.json(data.brokerageConfiguration);
  });
}