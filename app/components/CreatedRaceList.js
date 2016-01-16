'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var { map, extend } = require('lodash');

var RaceListItem = require('./RaceListItem');

var RaceList = React.createClass({
  render: function(){
    const { createdRaces } = this.props.user;
    const { navSummary } = this.props.navigateToAction;

    const races = map([{},{},{},{}], function(race, index){
      var newprops = extend({}, race, {
        key: index,
        name: `item ${index}`,
        thumbnail: 'http://www.placecage.com/75/75',
        startTime: Date.now(),
        startLocation: 'Hack Reactor'
      });
      return (
          <RaceListItem race={newprops} />
        );
    });

    return (
      <div className="race-view">
        <button onClick={navSummary}>Go to Summary</button>
        <h1>Current Races</h1>
        <ul className="created-races__list">
          {races}
        </ul>
      </div>
    )
  }

});

module.exports = RaceList;

