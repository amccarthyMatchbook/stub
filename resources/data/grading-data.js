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
var getGrading = {
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

var selectGrading = {
  "offset": 0,
  "per-page": 20,
  "total": 3,
  content: _.times(3, function(n) {
    return {
      "event-name": 'game ' + n,
      'id': id(),
      "period": periods[n],
      // 'team-a': 2 + n,
      // 'team-b': 0,
      // 'grading-action': gradingActions[n],
      'test': lorem({count: 2, units: 'sentences'}),
    };
  })
};

var grading = {
  "eventOutCome": {
    "periodScores": [
      {
        "eventPeriodName": "first-half",
        "homeScore": 3,
        "awayScore": 2,
        "status": "graded"
      },
      {
        "eventPeriodName": "second-half",
        "homeScore": 3,
        "awayScore": 2,
        "status": "graded"
      },
      {
        "eventPeriodName": "full-event",
        "homeScore": 3,
        "awayScore": 2,
        "status": "graded"
      }
    ]
  },
  "name": "Joinville EC vs Goiás EC - Graded",
  "id": 19911
};


var grading = {
  "eventOutCome": {
    "periodScores": [
      {
        "eventPeriodName": "first-half",
        "homeScore": 3,
        "awayScore": 2,
        "status": "graded"
      },
      {
        "eventPeriodName": "second-half",
        "homeScore": 3,
        "awayScore": 2,
        "status": "graded"
      },
      {
        "eventPeriodName": "full-event",
        "homeScore": 3,
        "awayScore": 2,
        "status": "graded"
      }
    ]
  },
  "name": "Joinville EC vs Goiás EC",
  "id": 19911
};

var gradedEvent = {
  "offset": 0,
  "per-page": 20,
  "total": 3,
  content: _.times(3, function(n) {
    return {
      "event-name": 'game ' + n,
      'id': id(),
      "period": periods[n],
      // 'team-a': 2 + n,
      // 'team-b': 0,
      // 'grading-action': gradingActions[n],
      'test': lorem({count: 2, units: 'sentences'}),
    };
  })
};

//GET events
var sports = [
  {
    "competitions": [
      {
        "events": [
          {
            "eventOutCome": {
              "periodScores": [
                {
                  "eventPeriodType": "first-half",
                  "eventPeriodName": "first-half"
                },
                {
                  "eventPeriodType": "full-event",
                  "eventPeriodName": "full-event"
                }
              ]
            },
            "name": "FK Austria Wien v Spartak Trnava",
            "id": 16461
          },
          {
            "eventOutCome": {
              "periodScores": [
                {
                  "eventPeriodType": "full-event",
                  "eventPeriodName": "full-event"
                }
              ]
            },
            "name": "Lille OSC v FK Qäbälä",
            "id": 16416
          }
        ],
        "name": "UEFA Europa League",
        "sportName": "Soccer",
        "country": "Europe",
        "navigationTreNodeId": 224,
        "metaTagId": 239
      },
      {
        "events": [
          {
            "eventOutCome": {
              "periodScores": [
                {
                  "eventPeriodType": "full-event",
                  "eventPeriodName": "full-event"
                }
              ]
            },
            "name": "HIFK vs SJK",
            "id": 16887
          },
          {
            "eventOutCome": {
              "periodScores": [
                {
                  "eventPeriodType": "full-event",
                  "eventPeriodName": "full-event"
                }
              ]
            },
            "name": "PK-35 Vantaa v Ilves",
            "id": 19680
          }
        ],
        "name": "Veikkausliiga",
        "sportName": "Soccer",
        "country": "Finland",
        "navigationTreNodeId": 1026,
        "metaTagId": 1017
      },
      {
        "events": [
          {
            "eventOutCome": {
              "periodScores": [
                {
                  "eventPeriodType": "full-event",
                  "eventPeriodName": "full-event"
                }
              ]
            },
            "name": "Troyes AC v Sochaux-Montbéliard",
            "id": 16773
          }
        ],
        "name": "Ligue 2",
        "sportName": "Soccer",
        "country": "France",
        "navigationTreNodeId": 335,
        "metaTagId": 350
      },
      {
        "events": [
          {
            "eventOutCome": {
              "periodScores": [
                {
                  "eventPeriodType": "first-half",
                  "eventPeriodName": "first-half"
                }
              ]
            },
            "name": "Alianza Atletico vs Deportivo Municipal",
            "id": 19911
          }
        ],
        "name": "Primera División Peruana",
        "sportName": "Soccer",
        "country": "Peru",
        "navigationTreNodeId": 100,
        "metaTagId": 112
      },
      {
        "events": [
          {
            "eventOutCome": {
              "periodScores": [
                {
                  "eventPeriodType": "full-event",
                  "eventPeriodName": "full-event"
                }
              ]
            },
            "name": "GAIS v Varbergs BolS",
            "id": 16962
          }
        ],
        "name": "Superettan",
        "sportName": "Soccer",
        "country": "Sweden",
        "navigationTreNodeId": 803,
        "metaTagId": 857
      }
    ],
    "name": "Soccer",
    "id": 15
  }
];

//GET events
var competitions = {
  "competitions": [
    {
      "events": [
        {
          "eventOutCome": {
            "periodScores": [
              {
                "eventPeriodType": "first-half",
                "eventPeriodName": "first-half"
              },
              {
                "eventPeriodType": "full-event",
                "eventPeriodName": "full-event"
              }
            ]
          },
          "name": "FK Austria Wien v Spartak Trnava",
          "id": 16461
        },
        {
          "eventOutCome": {
            "periodScores": [
              {
                "eventPeriodType": "full-event",
                "eventPeriodName": "full-event"
              }
            ]
          },
          "name": "Lille OSC v FK Qäbälä",
          "id": 16416
        }
      ],
      "name": "UEFA Europa League",
      "sportName": "Soccer",
      "country": "Europe",
      "navigationTreNodeId": 224,
      "metaTagId": 239
    },
    {
      "events": [
        {
          "eventOutCome": {
            "periodScores": [
              {
                "eventPeriodType": "full-event",
                "eventPeriodName": "full-event"
              }
            ]
          },
          "name": "HIFK vs SJK",
          "id": 16887
        },
        {
          "eventOutCome": {
            "periodScores": [
              {
                "eventPeriodType": "full-event",
                "eventPeriodName": "full-event"
              }
            ]
          },
          "name": "PK-35 Vantaa v Ilves",
          "id": 19680
        }
      ],
      "name": "Veikkausliiga",
      "sportName": "Soccer",
      "country": "Finland",
      "navigationTreNodeId": 1026,
      "metaTagId": 1017
    },
    {
      "events": [
        {
          "eventOutCome": {
            "periodScores": [
              {
                "eventPeriodType": "full-event",
                "eventPeriodName": "full-event"
              }
            ]
          },
          "name": "Troyes AC v Sochaux-Montbéliard",
          "id": 16773
        }
      ],
      "name": "Ligue 2",
      "sportName": "Soccer",
      "country": "France",
      "navigationTreNodeId": 335,
      "metaTagId": 350
    },
    {
      "events": [
        {
          "eventOutCome": {
            "periodScores": [
              {
                "eventPeriodType": "first-half",
                "eventPeriodName": "first-half"
              }
            ]
          },
          "name": "Alianza Atletico vs Deportivo Municipal",
          "id": 19911
        }
      ],
      "name": "Primera División Peruana",
      "sportName": "Soccer",
      "country": "Peru",
      "navigationTreNodeId": 100,
      "metaTagId": 112
    },
    {
      "events": [
        {
          "eventOutCome": {
            "periodScores": [
              {
                "eventPeriodType": "full-event",
                "eventPeriodName": "full-event"
              }
            ]
          },
          "name": "GAIS v Varbergs BolS",
          "id": 16962
        }
      ],
      "name": "Superettan",
      "sportName": "Soccer",
      "country": "Sweden",
      "navigationTreNodeId": 803,
      "metaTagId": 857
    }
  ],
  "name": "Soccer",
  "id": 15
};

//GET events
var events = {
  "events": [
    {
      "eventOutCome": {
        "periodScores": [
          {
            "eventPeriodType": "first-half",
            "eventPeriodName": "first-half"
          },
          {
            "eventPeriodType": "full-event",
            "eventPeriodName": "full-event"
          }
        ]
      },
      "name": "FK Austria Wien v Spartak Trnava",
      "id": 16461
    },
    {
      "eventOutCome": {
        "periodScores": [
          {
            "eventPeriodType": "full-event",
            "eventPeriodName": "full-event"
          }
        ]
      },
      "name": "Lille OSC v FK Qäbälä",
      "id": 16416
    }
  ],
  "name": "UEFA Europa League",
  "sportName": "Soccer",
  "country": "Europe",
  "navigationTreNodeId": 224,
  "metaTagId": 239
};

module.exports = {
  getGrading: getGrading,
  grading: grading,
  selectGrading: selectGrading,
  gradedEvent: gradedEvent,
  sports: sports,
  competitions: competitions,
  events: events
};