// Details of a single production line.
// Note: Stateless renderer component - Only contains logic to render DOM elements.

"use strict";

var React = require("react");

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var Line = require('../../domain/Line');
var StationStatus = require('../../domain/StationStatus');

var StationRow = React.createClass({

    propTypes: {
        line: React.PropTypes.instanceOf(Line).isRequired,
        stationStatus: React.PropTypes.instanceOf(StationStatus).isRequired
    },

    render: function() {
        return (
            <tr>
                <div className="StationRow">
                    <td><Link to="stationDetails" params={{lineId: this.props.line.LineId, stationId: this.props.stationStatus.StationId}}>{this.props.stationStatus.Name}</Link></td>
                    <td>{this.props.stationStatus.Total}</td>
                </div>
            </tr>
        );
    }
});

module.exports = StationRow;