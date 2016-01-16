var React = require('react');


var Timer = React.createClass({
	componentDidMount: function(){
		//do nothing?
	},

	componentDidUpdate: function(){
		var currentTime = new Date();
		console.log('datetime timer',currentTime);
	},
	render: function(){
	}
});


module.exports = Timer;