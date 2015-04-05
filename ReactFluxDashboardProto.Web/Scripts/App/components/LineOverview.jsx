// Overview of a line.

"use strict";

var React = require("react");
var Router = require('react-router');
var SetIntervalMixin = require('../infrastructure/mixins/setIntervalMixin.jsx');

var FactoryStore = require("../stores/FactoryStore");
var AlarmEventStore = require("../stores/AlarmEventStore");

var StationActionCreators = require('../actions/StationActionCreators');
var StationEquipmentAlarmActionCreators = require('../actions/StationEquipmentAlarmActionCreators');
var StationConveyorAlarmActionCreators = require('../actions/StationConveyorAlarmActionCreators');

var LineStationTable = require("./LineOverview/LineStationTable.jsx");
var Line = require('../domain/Line');

var UPDATE_FREQUENCY = 2000;

var LineOverview = React.createClass({

    mixins: [ Router.State, SetIntervalMixin ],

    _stationsChanged: function() {
        this.forceUpdate();
    },

    _updateState: function () {
        var line = new Line(this.getParams().lineId);
        StationActionCreators.loadStationStatuses(line);
        //StationActionCreators.loadStationIds(line);
    },

    componentDidMount: function() {
        FactoryStore.bind(this._stationsChanged);
        AlarmEventStore.bind(this._stationsChanged);

        this._updateState();

        this.setInterval(this._updateState, UPDATE_FREQUENCY);
    },

    componentWillUnmount: function() {
        FactoryStore.unbind(this._stationsChanged);
        AlarmEventStore.unbind(this._stationsChanged);
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