var React = require('react');



var NavBar = React.createClass({
	render: function () {
    var navCreatedRaces = function(e){
      console.log(e);
      this.props.navigateToAction.navigateCreatedRaces(this.props.userId);
    }.bind(this);

		return (
			<div className="nav--main">
				<div className="nav--main__container">
				<div className="nav--main__links">
					<div className="nav--main__link" onClick={this.props.navigateToAction.navigateCreateRace}>Create</div>
					<div className="nav--main__link" onClick={navCreatedRaces}>Created Races</div>
					<div className="nav--main__link" onClick={this.props.navigateToAction.navigateRace}>Race</div>
				</div>
				</div>
			</div>
		)
	}
})

module.exports = NavBar;
