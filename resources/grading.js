'use strict';

var _ = require('lodash'),
  data = require('./data/grading-data');

module.exports = function(app) {
  // GET sports
   app.get('/admin/grading/sports', function(req, res) {
    res.status(200);
    console.log('GET grading Sports');
    res.json(data.sports);
  });
    // GET sports/:id
   app.get('/admin/grading/sports/:id/competitions', function(req, res) {
    res.status(200);
    console.log('GET Sports id');
    res.json(data.competitions);
  });
  // GET
  app.get('/admin/grading/:id', function(req, res) {
    res.status(200);
    console.log('GET grading by ID');
    res.json(data.selectGrading);
  });
  // GET
  app.get('/admin/grading', function(req, res) {
    res.status(200);
    console.log('test GET grading', req.query);
    res.json(data.getGrading);
  });
  // PUT
  app.put('/admin/grading/events/:id/results', function(req, res) {
    res.status(200);
    console.log('create grading PUT grading');
    res.json(data.grading);
  });
  // POST
  app.post('/admin/grading/events/:id/results', function(req, res) {
    res.status(200);
    console.log('create grading POST grading');
    res.json({});
  });
  // PUT
  app.put('/admin/grading/:id', function(req, res) {
    res.status(200);
    console.log('PUT grading!!!!', req.body);
    res.json(req.body);
  });
  // POST
  app.post('/admin/grading/excluded-resources/edit', function(req, res) {
    res.status(200);
    console.log('create grading POST gradings');
    res.json({
      'grading': req.body.grading,
      'gradingname': req.body.gradingname,
      'first-name': req.body.firstName,
      'last-name': req.body.lastname,
      'grading-status': 'Active',
      'role': '[ROLE_USER, ROLE_SUBMIT_BET]',
      'id': id(),
      'test': lorem({count: 2, units: 'sentences'})
    });
  });
}