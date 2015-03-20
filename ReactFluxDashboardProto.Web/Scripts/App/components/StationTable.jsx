// Overview of all stations in a given line.

"use strict";

var React = require("React/addons");
var Router = require('react-router');
var FactoryStore = require("../stores/FactoryStore");
var StationActionCreators = require('../actions/StationActionCreators');
var StationTableHeader = require("./StationTableHeader.jsx");
var StationTableBody = require("./StationTableBody.jsx");
var Line = require('../domain/Line');

var StationTable = React.createClass({

    mixins: [ Router.State ],

    stationsChanged: function() {
        this.forceUpdate();
    },

    componentDidMount: function() {
        FactoryStore.bind(this.stationsChanged);

        // Start fetching the data.  Store change event will occur when the data is ready.
        var line = new Line(this.getParams().lineId)
        StationActionCreators.loadStationStatuses(line);
    },

    componentWillUnmount: function() {
        FactoryStore.unbind(this.stationsChanged);
    },

    render: function() {
        var line = new Line(this.getParams().lineId)
        var stationStatuses = FactoryStore.getAllStations(line);

        return (
            <div className="StationTable">
                <h4>Line {line.LineId} Stations</h4>
                <table className="table table-hover">
                    <StationTableHeader />
                    <StationTableBody line={line} stationStatuses={stationStatuses} />
                </table>
            </div>
        );
    }
});

module.exports = StationTable;