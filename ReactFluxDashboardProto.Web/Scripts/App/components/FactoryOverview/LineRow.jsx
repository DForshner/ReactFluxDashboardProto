// Details of a single production line.
// Note: Stateless renderer component - Only contains logic to render DOM elements.

"use strict";

var React = require("react");
var Router = require('react-router');
var CreateWithTooltipMixin = require("../../infrastructure/mixins/CreateWithTooltipMixin.jsx");

var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var LineStatus = require('../../domain/LineStatus');

var LineRow = React.createClass({

    mixins: [ CreateWithTooltipMixin ],

    propTypes: {
        lineStatus: React.PropTypes.instanceOf(LineStatus).isRequired
    },

    render: function() {
        return (
            <tr className="LineRow">
                <td><Link to="lineOverview" params={{lineId: this.props.lineStatus.LineId}}>{this.props.lineStatus.Name}</Link></td>
                <td>{this.createWithTooltip(this.props.lineStatus.Total, "Total widgets produced on the current run.")}</td>
                <td>{this.createWithTooltip(this.props.lineStatus.Defects, "Total Defects produced on the current run.")}</td>
                <td>{this.createWithTooltip(this.props.lineStatus.getDefectRatio(), "The current defect ratio.")}</td>
            </tr>
        );
    }
});

module.exports = LineRow;