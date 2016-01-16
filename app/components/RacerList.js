'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var { map, extend } = require('lodash');

var RacerListItem = require('./RacerListItem');

var RacerList = React.createClass({

	render: function () {
		var racers = this.props.racers.map(function (racer, index) {
			return (
				<RacerListItem racer={extend({}, racer, { rank: index})}>
				</RacerListItem>
			);
		});

		return (
			<div className ="racer-list">
				{racers}
			</div>
		);
	}
});

module.exports = RacerList;
