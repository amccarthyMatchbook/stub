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
    var sport = ['Horse Racing', 'Soccer', 'Cricket', 'Baseball', 'Rugby Union', 'Rugby Legue', 'Golf', 'Cycling'];
    var type = ['competition', 'country', 'sport', 'date', 'time', 'location'];
    var name = ['Cheltenham', 'United Kingdom', 'Horse Racing', '1-3-2016', '14:20', 'Cheltenham',];
    var slug = ['cheltenham', 'united-kingdom', 'horse-racing', '1-3-2016', '14:20', 'cheltenham',];


    var random = Math.floor((Math.random() * 4) + 1);
    var random_tier = Math.ceil((Math.random() * 4));
    var random_sport = Math.floor((Math.random() * 7) + 1);
    var random_tier = Math.floor((Math.random() * 3) + 1);

    return {
      "id": id(),
      'type': type[n],
      "name": name[n],
      "slug": slug[n],
      'test': lorem({count: 2, units: 'sentences'}),
    };
  })
};


module.exports = {
  events: getEvents,
};