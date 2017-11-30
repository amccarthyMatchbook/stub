var _ = require('lodash');
var id = require('node-uuid').v4;
var lorem = require('lorem-ipsum');
var moment = require('moment');

var rand = function(start, end, step) {
  step = step || 1;

  // Floating point precision crap.
  var decimalPlaces = (step.toString().split('.')[1] || []).length;

  return parseFloat(_.sample(_.range(start || 0, end || 100, step || 1)).toFixed(decimalPlaces));
};

var periods = ['first-half', 'second-half', 'full-time'];
var gradingActions = ['grade', 'push', 'partial'];
var events = [
  {
    "status": "active",
    "name": "FK Austria Wien v Spartak Trnava",
    "id": 16461
  },
  {
    "status": "active",
    "name": "Lille OSC v FK Qäbälä",
    "id": 16416
  }
];
//GET events
var event =  [
  {
    "status": "active",
    "name": "FK Austria Wien v Spartak Trnava 1",
    "id": 16461111
  }
];
// GET market
var market = [
  {
    "status": "active",
    "name": "FK Austria Wien v Spartak Trnava 1x2",
    "id": 1646122222
  },
];
//GET competition
var competitions = [
  {
    "status": "active",
    "name": "FK Austria Wien v Spartak Trnava 1x2",
    "id": 16461233333
  },
];
// GET sports
var sports = [
  {
    "name":"Basketball",
    "id":4,
    "status":"active"
  },
  {
    "name":"Soccer",
    "id":15,
    "status":"active"
  }
];

module.exports = {
  events: events,
  event: event,
  market:market,
  competitions: competitions,
  sports: sports
};