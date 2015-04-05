// Details of a single production line.
// Note: Stateless renderer component - Only contains logic to render DOM elements.

"use strict";

var React = require("react");
var CreateWithTooltipMixin = require("../../infrastructure/mixins/CreateWithTooltipMixin.jsx");
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var Line = require('../../domain/Line');
var StationStatus = require('../../domain/StationStatus');

var StationRow = React.createClass({

    mixins: [ CreateWithTooltipMixin ],

    propTypes: {
        line: React.PropTypes.instanceOf(Line).isRequired,
        stationStatus: React.PropTypes.instanceOf(StationStatus).isRequired
    },

    render: function() {
        return (
            <tr className="StationRow">
                <td><Link to="stationDetails" params={{lineId: this.props.line.LineId, stationId: this.props.stationStatus.StationId}}>{this.props.stationStatus.Name}</Link></td>
                <td>{this.createWithTooltip(this.props.stationStatus.Total, "Total widgets produced for the current run.")}</td>
                <td>{this.createWithTooltip(this.props.stationStatus.Retries, "Total retries for the current run.")}</td>
                <td>{this.createWithTooltip(this.props.stationStatus.ScanErrors, "Total barcode scan errors for the current run.")}</td>
            </tr>
        );
    }

});

module.exports = StationRow;