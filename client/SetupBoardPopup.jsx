var React = require('react')
  , _ = require('lodash')
  , Actions = require('./actions');

var ShipPopup = React.createClass({
  pivotShip(event) {
    event.stopPropagation();
    Actions.setup.pivotShip();
  },

  render() {
    return(
      <div className="ship-popup">
        <button type="button" className="btn btn-primary btn" onClick={this.pivotShip}>Pivot</button>
      </div>);
  }
});

module.exports = ShipPopup;