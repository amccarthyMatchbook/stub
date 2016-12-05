'use strict';

var _ = require('lodash'),
  data = require('./data/payout-data');

module.exports = function(app) {
  // GET
  app.get('/payout/:id', function(req, res) {
    res.status(200);
    console.log('GET payout by ID');
    res.json(data.selectPayout);
  });
  // GET
  app.get('/payout', function(req, res) {
    res.status(200);
    console.log('test GET payout', req.query);
    res.json(data.getPayout);
  });
  // POST
  app.post('/payout/create', function(req, res) {
    res.status(200);
    console.log('create payout POST payout');
    res.json(data.editUser);
  });
  // PUT
  app.put('/payout/:id', function(req, res) {
    res.status(200);
    console.log('PUT payout!!!!', req.body);
    res.json(req.body);
  });
  // POST
  app.post('/payout/excluded-resources/edit', function(req, res) {
    res.status(200);
    console.log('create payout POST payouts');
    res.json({
      'payout': req.body.payout,
      'payoutname': req.body.payoutname,
      'first-name': req.body.firstName,
      'last-name': req.body.lastname,
      'payout-status': 'Active',
      'role': '[ROLE_USER, ROLE_SUBMIT_BET]',
      'id': id(),
      'test': lorem({count: 2, units: 'sentences'})
    });
  });
}