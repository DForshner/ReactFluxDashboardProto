// Overview of a line.

"use strict";

var React = require("react");
var Router = require('react-router');

var FactoryStore = require("../stores/FactoryStore");
var AlarmEventStore = require("../stores/AlarmEventStore");

var StationActionCreators = require('../actions/StationActionCreators');
var StationEquipmentAlarmActionCreators = require('../actions/StationEquipmentAlarmActionCreators');
var StationConveyorAlarmActionCreators = require('../actions/StationConveyorAlarmActionCreators');

var LineStationTable = require("./LineOverview/LineStationTable.jsx");
var Line = require('../domain/Line');

var LineOverview = React.createClass({

    mixins: [ Router.State ],

    stationsChanged: function() {
        this.forceUpdate();
    },

    componentDidMount: function() {
        FactoryStore.bind(this.stationsChanged);
        AlarmEventStore.bind(this.stationsChanged);

        // Start fetching the data.  Store change event will occur when the data is ready.
        var line = new Line(this.getParams().lineId);
        StationActionCreators.loadStationStatuses(line);
        StationActionCreators.loadStationIds(line);
    },

    componentWillUnmount: function() {
        FactoryStore.unbind(this.stationsChanged);
        AlarmEventStore.unbind(this.stationsChanged);
    },

    render: function() {
        var line = new Line(this.getParams().lineId);
        var stationStatuses = FactoryStore.getAllStations(line);

        return (
            <div className="LineOverview">
                <LineStationTable line={line} stationStatuses={stationStatuses} />
            </div>
        );
    }
});

module.exports = LineOverview;