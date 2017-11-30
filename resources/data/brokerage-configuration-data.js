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

var brokerageConfiguration = [{
    "total": 1,
    "brokerage-configuration": [{
        "id": 1,
        "sport-name": "American Football",
        "sport-id": 37,
        "brokerage-configuration-id": 2,
        "live": false,
        "active": true,
        "margin": 1.5,
        "stake": "123",
        "min-stake": 12

    },{
    	"id": 2,
    	"sport-name": "American Football",
    	"sport-id": 37,
    	"brokerage-configuration-id": 3,
    	"live": true,
    	"active": true,
    	"margin": 1.5,
    	"stake": "123",
    	"min-stake": 12
    }]
}];

module.exports = {
  brokerageConfiguration: brokerageConfiguration
};