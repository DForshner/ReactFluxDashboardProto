// Details about a station.

"use strict";

var React = require("react");
var Router = require("react-router");
var DefectTypePieChart = require("./StationDetails/DefectTypePieChart.jsx");
var AlarmHeatMap = require("./StationDetails/AlarmHeatMap.jsx");
var TemperatureProfile = require("./StationDetails/TemperatureProfile.jsx");
var FactoryStore = require("../stores/FactoryStore");
var StationDetailsActionCreators = require('../actions/StationDetailsActionCreators');
var Station = require('../domain/Station');
var AlarmEvent = require('../domain/AlarmEvent');

var _msInMin = 1000 * 60;
var _msInHour = _msInMin * 60;

// TODO: Get this alarm data from the server
var _equipmentEnd = Date.now();
var _equipmentStart = _equipmentEnd - (24 * _msInHour);
var _equipmentAlarms = ([
    new AlarmEvent("Alarm A", Date.now() - 0.1 * _msInHour),
    new AlarmEvent("Alarm A", Date.now() - 4 * _msInHour),
    new AlarmEvent("Alarm A", Date.now() - 12 * _msInHour),
    new AlarmEvent("Alarm A", Date.now() - 16 * _msInHour),
    new AlarmEvent("Alarm A", Date.now() - 23.9 * _msInHour)
]);

var _conveyorEnd = Date.now();
var _conveyorStart = _conveyorEnd - (24 * _msInHour);
var _converyorAlarms = ([
    new AlarmEvent("Alarm A", Date.now() - 0.1 * _msInHour),
    new AlarmEvent("Alarm A", Date.now() - 4 * _msInHour),
    new AlarmEvent("Alarm A", Date.now() - 12 * _msInHour),
    new AlarmEvent("Alarm A", Date.now() - 16 * _msInHour),
    new AlarmEvent("Alarm A", Date.now() - 23.9 * _msInHour)
]);


var StationDetails = React.createClass({

    mixins: [ Router.State ],

    _detailsChanged: function() {
        this.forceUpdate();
    },

    componentDidMount: function() {
        FactoryStore.bind(this._detailsChanged);
        var station = new Station(this.getParams().lineId, this.getParams().stationId);
        StationDetailsActionCreators.loadDefectData(station);
    },

    componentWillUnmount: function() {
        FactoryStore.unbind(this._detailsChanged);
    },

    render: function() {
        var station = new Station(this.getParams().lineId, this.getParams().stationId);
        var defectCounts = FactoryStore.getStationDefects(station);
        return (
            <div className="StationDetails panel panel-default">
                <div className="panel-heading">
                    <h3>Line {station.LineId} Station {station.StationId} Details</h3>
                </div>
                <div className="panel-body">

                    <div className="col-md-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">Defect Counts</div>
                            <div className="panel-body">
                                <DefectTypePieChart defectCounts={defectCounts} />
                            </div>
                        </div>

                        <div className="panel panel-default">
                            <div className="panel-heading">Temperature Profile</div>
                            <div className="panel-body">
                                <TemperatureProfile />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">Equipment Alarm History</div>
                            <div className="panel-body">
                                <AlarmHeatMap alarms={_equipmentAlarms} start={_equipmentStart} end={_equipmentEnd}/>
                            </div>

                            <div className="panel-heading">Conveyor Alarm History</div>
                            <div className="panel-body">
                                <AlarmHeatMap alarms={_converyorAlarms} start={_conveyorStart} end={_conveyorEnd}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
});

module.exports = StationDetails;