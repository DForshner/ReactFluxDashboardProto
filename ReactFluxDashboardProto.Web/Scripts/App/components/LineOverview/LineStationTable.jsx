// Overview of all stations in a given line.

"use strict";

var React = require("react");
var LineStationTableHeader = require("./LineStationTableHeader.jsx");
var LineStationTableBody = require("./LineStationTableBody.jsx");

var LineStationTable = React.createClass({

    render: function() {
        return (
            <div className="StationTable">
                <h4>Line {this.props.line.LineId} Stations</h4>
                <table className="table table-hover">
                    <LineStationTableHeader />
                    <LineStationTableBody line={this.props.line} stationStatuses={this.props.stationStatuses} />
                </table>
            </div>
        );
    }

});

module.exports = LineStationTable;