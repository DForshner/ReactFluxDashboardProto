// Details of a single production line.

"use strict";

var React = require("React/addons");
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var StationRow = React.createClass({

    propTypes: {
        lineId: React.PropTypes.string.isRequired,
        stationId: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        total: React.PropTypes.number.isRequired
    },

    render: function() {
        return (
            <tr>
                <div className="StationRow">
                    <td><Link to="stationDetails" params={{lineId: this.props.lineId, stationId: this.props.stationId}}>{this.props.name}</Link></td>
                    <td>{this.props.total}</td>
                </div>
            </tr>
        );
    }
});

module.exports = StationRow;