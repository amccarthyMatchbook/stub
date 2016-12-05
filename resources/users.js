'use strict';

var _ = require('lodash'),
  data = require('./data/users-data');

module.exports = function(app) {
  // GET
  app.get('/user', function(req, res) {
    res.status(200);
    console.log('test GET users');
    res.json(data.getUsers);
  });

  // GET
  app.get('/user/show/all?:searchParam', function(req, res) {
    res.status(200);
    console.log('searchParam GET users');
    res.json(data.searchUsers);
  });
  // POST
  app.post('/user/create', function(req, res) {
    res.status(200);
    console.log('create user POST users');
    res.json(data.editUser);
  });
  // POST
  app.post('/user/excluded-resources/edit', function(req, res) {
    res.status(200);
    console.log('create user POST users');
    res.json({
      'user': req.body.user,
      'username': req.body.username,
      'first-name': req.body.firstName,
      'last-name': req.body.lastname,
      'user-status': 'Active',
      'role': '[ROLE_USER, ROLE_SUBMIT_BET]',
      'id': id(),
      'test': lorem({count: 2, units: 'sentences'})
    });
  });
}