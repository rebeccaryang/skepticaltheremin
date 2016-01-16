'use strict';

var _ = require('lodash');

var LOGIN = require('../constants').action.LOGIN;
var LOGOUT = require('../constants').action.LOGOUT;
var ACTION_TYPE = require('../constants').action.ACTION_TYPE;
var CREATED_RACES_SUCCESS = require('../constants').action.CREATED_RACES_SUCCESS;
var SELECT_RACE = require('../constants').action.SELECT_RACE;
var LOCATION_CHANGE = require('../constants').action.LOCATION_CHANGE;
var ADD_AVAILABLE_RACES = require('../constants.js').action.ADD_AVAILABLE_RACES;

var initial = {
    _id: null,
    isLoggedIn: false,
    currentLocation: null,
    availableRaces: [],
    createdRaces: []
  };

function userReducer (state, action) {
  state = state || initial;
  switch (action.type) {
    case CREATED_RACES_SUCCESS:
      return _.extend({}, state, {
        createdRaces: action.payload
      });
    case LOCATION_CHANGE:
    console.log('inLocation change', state);
      return _.extend({}, state, {
        currentLocation: {
          lat: action.payload.coords.latitude,
          lng: action.payload.coords.longitude
        }
      });
    case LOGIN:
      return _.extend({}, state, {
        isLoggedIn: true
      });
    case LOGOUT:
      return _.extend({}, state, {
        isLoggedIn: false
      });
    case ADD_AVAILABLE_RACES:
      return _.extend({}, state, {
        availableRaces: action.payload
      });
    default:
      return state;
  }
}

module.exports = userReducer;
