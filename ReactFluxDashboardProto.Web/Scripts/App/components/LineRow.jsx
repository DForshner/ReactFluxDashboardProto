// Details of a single production line.
// Note: Stateless renderer component - Only contains logic to render DOM elements.

"use strict";

var React = require("React/addons");
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var LineStatus = require('../domain/LineStatus');

var LineRow = React.createClass({

    propTypes: {
        lineStatus: React.PropTypes.instanceOf(LineStatus).isRequired
    },

    render: function() {
        return (
            <tr>
                <div className="LineRow">
                    <td><Link to="lineOverview" params={{lineId: this.props.lineStatus.LineId}}>{this.props.lineStatus.Name}</Link></td>
                    <td>{this.props.lineStatus.Total}</td>
                </div>
            </tr>
        );
    }
});

module.exports = LineRow;