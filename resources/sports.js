'use strict';

var _ = require('lodash'),
  data = require('./data/sports-data');

module.exports = function(app) {
  //GET
  app.get('/admin/grading/sports', function(req, res) {
    res.status(200);
    console.log('GET Sports');
    res.json(data.sports);
  });

  // // GET
  // app.get('admin/grading/sports/:id', function(req, res) {
  //   res.status(200);
  //   console.log('GET grading sports :id');
  //   res.json(data.selectGrading);
  // });
}