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
//GET /events
var getEvents = {
  "offset": 0,
  "per-page": 20,
  "total": 4,
  content: _.times(4, function(n) {
    return {
      "id": id(),
      'test': lorem({count: 2, units: 'sentences'}),
    };
  })
};


module.exports = {
  getEvents: getEvents,
};