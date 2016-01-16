'use strict';

var _ = require('lodash');

var CENTER_MAP = require('../constants').action.CENTER_MAP;
var ADD_WAYPOINT = require('../constants').action.ADD_WAYPOINT;
var PUBLISH_RACE = require('../constants').action.PUBLISH_RACE;

var initial =  {
    name: '',
    dateTime: new Date(),
    waymarks: [],
    latitude: 37.7836966,
    longitude: -122.4089664
  };

function raceReducer(state, action){
  state = state || initial;
  switch(action.type){
    case CENTER_MAP:
      return _.extend({}, state, {
        newRace: {
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
        }
      });
    case ADD_WAYPOINT:
      return _.extend({}, state, {
          waymarks: state.waymarks.concat([action.payload])
      });
    case PUBLISH_RACE://click the submit button
      return _.extend({}, initial);
    default:
      return initial;
  }
}

module.exports = raceReducer;
