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
//GET /grading
var getPayout = {
  "offset": 0,
  "per-page": 20,
  "total": 3,
  content: _.times(3, function(n) {
    return {
      'id': id(),
      "event-name": 'game ' + n,
      'sport': 'soccer',
      'competition': 'La Liga',
      'status': 'closed'
    };
  })
};

var selectPayout = {
  "offset": 0,
  "per-page": 20,
  "total": 3,
  content: _.times(3, function(n) {
    return {
      "event-name": 'game ' + n,
      'id': id(),
      "period": periods[n],
      'team-a': 2 + n,
      'team-b': 0,
      'grading-action': gradingActions[n],
      'test': lorem({count: 2, units: 'sentences'}),
    };
  })
};

var paidEvent = {
  "offset": 0,
  "per-page": 20,
  "total": 3,
  content: _.times(3, function(n) {
    return {
      "event-name": 'game ' + n,
      'id': id(),
      "period": periods[n],
      'team-a': 2 + n,
      'team-b': 0,
      'grading-action': gradingActions[n],
      'test': lorem({count: 2, units: 'sentences'}),
    };
  })
};

module.exports = {
  getPayout: getPayout,
  selectPayout: selectPayout,
  paidEvent: paidEvent
};