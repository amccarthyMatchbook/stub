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
//GET /users
var getUsers = {
  "offset": 0,
  "per-page": 20,
  "total": 20,
  content: _.times(20, function(n) {
    return {
      'user': n + 100,
      'username': 'username' + n + 100,
      'first-name':'first name' + n + 100,
      'last-name':'last name' + n + 100,
      'user-status': 'Active',
      'Role': '[ROLE_USER, ROLE_SUBMIT_BET]',
      'id': id(),
      'test': lorem({count: 2, units: 'sentences'}),
    };
  })
};

module.exports = {
  getUsers: getUsers,
};