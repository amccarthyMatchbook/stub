'use strict';

var _ = require('lodash'),
  data = require('./data/event-management');

module.exports = function(app) {
  //GET
  app.get('/mercury/api/admin/event-management/events', function(req, res) {
    res.status(200);
    console.log('GET EventManagement');
    res.json(data.events);
  });
  //GET events by nameKeyword
  app.get('/mercury/api/admin/event-management/events?:nameKeyword', function(req, res) {
    res.status(200);
    console.log('GET EventManagement');
    res.json(data.events);
  });
  //GET competitions by nameKeyword
  app.get('/mercury/api/admin/event-management/competitions?:nameKeyword', function(req, res) {
    res.status(200);
    console.log('GET competitions by name keyword');
    res.json(data.competitions);
  });
  //PUT competitions by nameKeyword
  app.put('/mercury/api/admin/event-management/competitions/:id', function(req, res) {
    res.status(200);
    console.log('GET competitions by name keyword');
    res.json(req.body);
  });
  // GET event by id
  app.get('/mercury/api/admin/event-management/event/:id', function(req, res) {
    res.status(200);
    console.log('GET EventManagement by ID');
    res.json(data.event);
  });
  // PUT event by id
  app.put('/mercury/api/admin/event-management/event/:id', function(req, res) {
    res.status(200);
    console.log('PUT EventManagement by ID');
    res.json(req.body);
  });
  // GET market by id
  app.get('/mercury/api/admin/event-management/market/:id', function(req, res) {
    res.status(200);
    console.log('GET market by ID');
    res.json(data.market);
  });
  // PUT market by id
  app.put('/mercury/api/admin/event-management/market/:id', function(req, res) {
    res.status(200);
    console.log('GET market by ID');
    res.json(req.body);
  });
   //GET sport
  app.get('/mercury/api/admin/event-management/sports', function(req, res) {
    res.status(200);
    console.log('GET sports');
    res.json(data.sports);
  });
  //GET sport by id
  app.get('/mercury/api/admin/event-management/sports/:id', function(req, res) {
    res.status(200);
    console.log('GET sports by id');
    res.json(req.body);
  });
}