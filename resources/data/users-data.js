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
// GET /users
var getUsers = {
  "offset": 0,
  "per-page": 20,
  "total": 40,
  content: _.times(40, function(n) {
    return {
      'user': n + 100,
      'detailTitle': 'miss',
      'detailUserName': 'username_' + n + 100,
      'detailFirstName':'first name_' + n + 100,
      'detailMiddleName': 'middleName_' + n + 20,
      'detailLastName':'last name_' + n + 100,
      'detailDateOfBirth': 'dateOfBirth'+ n + 20,
      'detailEmail': 'email'+ n + 20,
      'detailPhoneNumber': 'phoneNumber'+ n + 20,
      'detailFirstLine1': 'firstLine1'+ n + 20,
      'detailSecondLine2': 'secondLine2'+ n + 20,
      'detailCity': 'city'+ n + 20,
      'detailRegion': 'region'+ n + 20,
      'detailCountryCode': 'countryCode'+ n + 20,
      'detailPostalCode': 'postalCode'+ n + 20,
      'detailPassword': 'password'+ n + 20,
      'detailRetypePassword': 'retypePassword_'+ n + 20,
      'detailUserType': 'userType'+ n + 20,
      'detailCurrencyCode': 'currencyCode'+ n + 20,
      'userStatus': 'Active',
      'role': '[ROLE_USER, ROLE_SUBMIT_BET]',
      'id': id(),
      'test': lorem({count: 2, units: 'sentences'}),
      'userContactNoteId': 1234 + n + 20,
      'userContactNote': 'Test note',
      'userContactDescription': 'Test Description',
      'userContactCallNumber': '0099887766',
      'userContactNoteMadeBy': 'admin',
      'userContactNoteTime': '08/04/2016'
    };
  })
};
// SEARCH users
var searchUsers = {
  "offset": 0,
  "per-page": 20,
  "total": 20,
  content: _.times(20, function(n) {
    return {
      'user': n + 300,
      'detailTitle': 'miss',
      'detailUserName': 'username_' + n + 300,
      'detailFirstName':'first name_' + n + 300,
      'detailMiddleName': 'middleName_' + n + 300,
      'detailLastName':'last name_' + n + 300,
      'detailDateOfBirth': 'dateOfBirth' + n + 300,
      'detailEmail': 'email' + n + 300,
      'detailPhoneNumber': 'phoneNumber' + n + 300,
      'detailFirstLine1': 'firstLine1' + n + 300,
      'detailSecondLine2': 'secondLine2' + n + 300,
      'detailCity': 'city' + n + 300,
      'detailRegion': 'region' + n + 300,
      'detailCountryCode': 'countryCode' + n + 300,
      'detailPostalCode': 'postalCode' + n + 300,
      'detailPassword': 'password' + n + 300,
      'detailRetypePassword': 'retypePassword_' + n + 300,
      'detailUserType': 'userType' + n + 300,
      'detailCurrencyCode': 'currencyCode'+ n + 300,
      'user-status': 'Active',
      'role': '[ROLE_USER, ROLE_SUBMIT_BET]',
      'id': id(),
      'test': lorem({count: 2, units: 'sentences'}),
      'userContactNote': 'Test note',
      'userContactDescription': 'Test Description',
      'userContactCallNumber': '0099887766'
    };
  })
};
// SEARCH users
var createNewUser = {
  'user': 301,
  'username': 'new User',
  'first-name':'new user_',
  'last-name':'lnew user_',
  'user-status': 'Active',
  'role': '[ROLE_USER, ROLE_SUBMIT_BET]',
  'id': id(),
  'test': lorem({count: 2, units: 'sentences'})
};

module.exports = {
  getUsers: getUsers,
  searchUsers: searchUsers,
  createNewUser: createNewUser
};