// Details of a single production line.

"use strict";

var React = require("React");
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var StationRow = React.createClass({
    propTypes: {
        id: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        total: React.PropTypes.number.isRequired
    },

    render: function() {
        return (
            <tr>
                <div className="StationRow">
                    <td><Link to="station" params={{id: this.props.id}}>{this.props.name}</Link></td>
                    <td>{this.props.total}</td>
                </div>
            </tr>
        );
    }
});

module.exports = StationRow;