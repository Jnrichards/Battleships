var React = require('react/addons');
var _ = require('lodash');

var Ship = React.createClass({
  render() {
    var cells = [];
    this.props.ship.cells.forEach((cell) => {
      var rectProps = {
        width: 10,
        height: 10,
        x: cell.x * 10,
        y: cell.y * 10,
        key: cell.x + '.' + cell.y + ''
      }
      cells.push(<rect {...rectProps}/>);
    });

    var cx = React.addons.classSet;
    var classes = cx({
      'ship': true,
      'selected': this.props.selected
    });

    return (
      <g className={classes} onClick={this.props.onShipClick} onDoubleClick={this.props.onShipDoubleClick}>
        {cells}
      </g>
    )
  }
});
module.exports = Ship;