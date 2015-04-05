// List of all production lines
// Note: Stateless renderer component - Only contains logic to render DOM elements.

"use strict";

var React = require("react");
var LineRow = require("./LineRow.jsx");

var LineTableBody = React.createClass({

    propTypes: {
        lineStatuses: React.PropTypes.array.isRequired
    },

    render: function() {
        var lineStatuses = this.props.lineStatuses;
        var rows = lineStatuses.map(function(lineStatus, i) {
            return (
                <LineRow lineStatus={lineStatus} key={lineStatus.getHashCode()} />
            );
        });
        return (
            <tbody className="LineTableBody">
                {rows}
            </tbody>
        );
    }

});

module.exports = LineTableBody;