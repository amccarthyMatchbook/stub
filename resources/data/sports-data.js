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

//GET events
var sports = [{"competitions":[{"events":[{"eventOutCome":{"periodScores":[{"eventPeriodType":"FIRST_HALF","eventPeriod":"FIRST_HALF"},{"eventPeriodType":"FULL_EVENT","eventPeriod":"FULL_EVENT"}]},"name":"FK Austria Wien v Spartak Trnava","id":16461},{"eventOutCome":{"periodScores":[{"eventPeriodType":"FULL_EVENT","eventPeriod":"FULL_EVENT"}]},"name":"Lille OSC v FK Qäbälä","id":16416}],"name":"UEFA Europa League","sportName":"Soccer","country":"Europe","navigationTreNodeId":224,"metaTagId":239},{"events":[{"eventOutCome":{"periodScores":[{"eventPeriodType":"FULL_EVENT","eventPeriod":"FULL_EVENT"}]},"name":"HIFK vs SJK","id":16887},{"eventOutCome":{"periodScores":[{"eventPeriodType":"FULL_EVENT","eventPeriod":"FULL_EVENT"}]},"name":"PK-35 Vantaa v Ilves","id":19680}],"name":"Veikkausliiga","sportName":"Soccer","country":"Finland","navigationTreNodeId":1026,"metaTagId":1017},{"events":[{"eventOutCome":{"periodScores":[{"eventPeriodType":"FULL_EVENT","eventPeriod":"FULL_EVENT"}]},"name":"Troyes AC v Sochaux-Montbéliard","id":16773}],"name":"Ligue 2","sportName":"Soccer","country":"France","navigationTreNodeId":335,"metaTagId":350},{"events":[{"eventOutCome":{"periodScores":[{"eventPeriodType":"FIRST_HALF","eventPeriod":"FIRST_HALF"}]},"name":"Alianza Atletico vs Deportivo Municipal","id":19911}],"name":"Primera División Peruana","sportName":"Soccer","country":"Peru","navigationTreNodeId":100,"metaTagId":112},{"events":[{"eventOutCome":{"periodScores":[{"eventPeriodType":"FULL_EVENT","eventPeriod":"FULL_EVENT"}]},"name":"GAIS v Varbergs BolS","id":16962}],"name":"Superettan","sportName":"Soccer","country":"Sweden","navigationTreNodeId":803,"metaTagId":857}],"name":"Soccer","id":15}];




module.exports = {
  sports: sports
};