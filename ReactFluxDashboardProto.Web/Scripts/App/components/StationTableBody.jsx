// List of all production lines

"use strict";

var React = require("React/addons");
var StationRow = require("./StationRow.jsx");
var Line = require('../domain/Line');

var StationTableBody = React.createClass({

    propTypes: {
        stations: React.PropTypes.array.isRequired,
        line: React.PropTypes.instanceOf(Line).isRequired
    },

    render: function() {
        var line = this.props.line;
        var rows = this.props.stations.map(function(station, index) {
            return (
                <StationRow lineId={line.LineId} stationId={station.Id} name={station.Name} total={station.Total} key={index}/>
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