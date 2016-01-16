// 'use strict';

var _ = require('lodash');
var React = require('react');
var ReactDOM = require('react-dom');
var { bindActionCreators } = require('redux');
var { connect } = require('react-redux');

var CREATED_RACE_LIST = require('../constants').view.CREATED_RACE_LIST;
var CREATE = require('../constants').view.CREATE;
var RACE = require('../constants').view.RACE;
var SUMMARY = require('../constants').view.SUMMARY;

var NavBar = require('../components/NavBar');
var CreateRace = require('../components/CreateRace');
var actions = require('../actions');


var Create = require('../components/CreateRace');
var Race = require('../components/Race'); // TO DO: MAKE THIS
var CreatedRaceList = require('../components/CreatedRaceList');
var Summary = require('../components/Summary')

var contextType = {
  redux: React.PropTypes.object
}

var App = React.createClass({

  componentDidMount(){
    const { locationChange } = this.props.locationChangeAction;
    if (window.navigator && window.navigator.geolocation){
      window.navigator.geolocation
        .getCurrentPosition((pos) => {
          locationChange(pos);
        });
    } else {
      // send action with error
      console.log('No location available');
    }
  },

  render: function() {
    var currentView = null;

    switch(this.props.view){
      case CREATE:
        return (
          <div>
            <NavBar userId={this.props.user._id} navigateToAction={this.props.navigateToAction}/>
            <CreateRace {...this.props} />
          </div>
        );

      case RACE:
        return (
          <div>
            <NavBar userId={this.props.user._id} navigateToAction={this.props.navigateToAction}/>
            <Race {...this.props} />
          </div>
        );
      case SUMMARY:
        return (
          <div>
            <NavBar userId={this.props.user._id} navigateToAction={this.props.navigateToAction}/>
            <Summary {...this.props} />
          </div>
        );
      case CREATED_RACE_LIST:
        return (
          <div>
            <NavBar userId={this.props.user._id} navigateToAction={this.props.navigateToAction}/>
            <CreatedRaceList {...this.props} />;
          </div>
        );
    }
  }
});

function mapStateToProps(state) {
    // instantiate empty object
    // keys currently are: user, view, newRace, activeRace
    var mapping = {};

    for (var k in state){
      mapping[k] = state[k];
    }

  return mapping;
}

function mapDispatchToProps(dispatch) {
  // console.log("THE MAPPED ACTIONS", actions);
  var actionsObj = {}
  for(var key in actions) {
    actionsObj[key] = bindActionCreators(actions[key], dispatch);
  }
  console.log('actionsObj',actionsObj);
  return actionsObj;
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(App);
