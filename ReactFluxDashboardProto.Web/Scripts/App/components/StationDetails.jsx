// Details about a station.

"use strict";

var React = require("React/addons");
var Router = require('react-router');
var DefectTypePieChart = require("./DefectTypePieChart.jsx");
var FactoryStore = require("../stores/FactoryStore");
var StationDetailsActionCreators = require('../actions/StationDetailsActionCreators');
var Station = require('../domain/Station');

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
        var defects = FactoryStore.getStationDefects(station);
        return (
            <div className="StationDetails">
                <h4>Line {station.LineId} Station {station.StationId} Details</h4>
                <DefectTypePieChart
                    data={defects}
                />
            </div>
        );
    }
});

module.exports = StationDetails;