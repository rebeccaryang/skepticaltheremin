'use strict';

var START_RACE = require('../constants').action.START_RACE;
var FINISH_RACE = require('../constants').action.FINISH_RACE;
var CANCEL_RACE = require('../constants').action.CANCEL_RACE;
var ADD_AVAILABLE_RACES = require('../constants').action.ADD_AVAILABLE_RACES;
var SELECT_RACE = require('../constants').action.SELECT_RACE;

// START_RACE, FINISH_RACE, CANCEL_RACE

var startRace = function () {
	//socket connection should be made here.

	return {
		type: START_RACE
	}
}

var finishRace = function () {
	//user should be pass into results array of activeRace
	//completed should be true
	//should put the most recent version of race model
}

var cancelRace = function () {
	return {
		type
	}
}

//available races [{Race}]
var addAvailableRaces = function (payload) {
	return {
		type: ADD_AVAILABLE_RACES,
		payload: payload
	}
}

//selected race
var selectRace = function (payload) {
	return {
		type: SELECT_RACE,
		payload: payload
	}
}

module.exports = {
	startRace: startRace,
	finishRace: finishRace,
	cancelRace: cancelRace,
	addAvailableRaces: addAvailableRaces,
	selectRace: selectRace
}