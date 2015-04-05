// List of all production lines
// Note: Stateless renderer component - Only contains logic to render DOM elements.

"use strict";

var React = require("react/addons");
var StationRow = require("./StationRow.jsx");
var Line = require('../../domain/Line');
var StationStatus = require('../../domain/StationStatus');

var LineStationTableBody = React.createClass({

    propTypes: {
        stationStatuses: React.PropTypes.oneOfType([
            React.PropTypes.arrayOf(Object), // Empty array
            React.PropTypes.arrayOf(StationStatus).isRequired
        ]).isRequired,

        line: React.PropTypes.instanceOf(Line).isRequired
    },

    render: function() {
        var line = this.props.line;
        var rows = this.props.stationStatuses.map(function(stationStatus, i) {
            return (
                <StationRow line={line} stationStatus={stationStatus} key={stationStatus.getHashCode()}/>
            );
        });
        return (
            <tbody className="StationTableBody">
                {rows}
            </tbody>
        );
    }
});

module.exports = LineStationTableBody;