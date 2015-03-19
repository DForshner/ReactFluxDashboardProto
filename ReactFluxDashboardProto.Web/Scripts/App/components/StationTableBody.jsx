// List of all production lines
// Note: Stateless renderer component - Only contains logic to render DOM elements.

"use strict";

var React = require("React/addons");
var StationRow = require("./StationRow.jsx");
var Line = require('../domain/Line');

var StationTableBody = React.createClass({

    propTypes: {
        stationStatuses: React.PropTypes.array.isRequired,
        line: React.PropTypes.instanceOf(Line).isRequired
    },

    render: function() {
        var line = this.props.line;
        var rows = this.props.stationStatuses.map(function(stationStatus, i) {
            return (
                <StationRow line={line} stationStatus={stationStatus} key={i}/>
            );
        });
        return (
            <tbody className="StationTableBody">
                {rows}
            </tbody>
        );
    }
});

module.exports = StationTableBody;