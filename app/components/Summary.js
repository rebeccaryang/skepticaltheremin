'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var RacerList = require('./RacerList');
var NavBar = require('./NavBar');
var { map, extend } = require('lodash');

var Summary = React.createClass({

	render: function(){
    let { name, results } = this.props.activeRace;

    results = map([{},{},{},{}], function(racer, index){
      return extend({}, racer, {
        key: index,
        rank: index,
        name: 'Racer Name'
      });
    });

		return (
			<div>
        <h2>Results of {name}:</h2>
        <RacerList racers={results} />
      </div>
		);

	}
});

module.exports = Summary;
