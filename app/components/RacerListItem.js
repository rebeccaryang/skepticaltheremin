'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var RacerListItem = React.createClass({
	render: function() {

    const {name, rank} = this.props.racer


    console.log(this.props.racer);
		return (
			<div className="racer-entry">
				<span className="racer-entry__rank">{rank}: </span>
				<span className="racer-entry__name">{name}</span>
			</div>
		);
	}
})

module.exports = RacerListItem;
