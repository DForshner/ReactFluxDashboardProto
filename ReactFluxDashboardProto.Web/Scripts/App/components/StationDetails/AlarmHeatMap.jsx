// Alarm heat map

"use strict";

var React = require("react");
var EventHeatMap = require("../Common/EventHeapMap.jsx");
var HeatMapEvent = require("../../domain/HeatMapEvent");
var AlarmEvent = require("../../domain/AlarmEvent");

var AlarmHeatMap = React.createClass({

    propTypes: {
        alarms: React.PropTypes.oneOfType([
            React.PropTypes.arrayOf(Object), // Empty array
            React.PropTypes.arrayOf(HeatMapEvent).isRequired
        ]).isRequired,

        start: React.PropTypes.number.isRequired,

        end: React.PropTypes.number.isRequired
    },

    render: function() {
        var alarms = this.props.alarms;
        var events = alarms.map(function(event) {
            return new AlarmEvent(event.EventId, event.Timestamp);
        });
        return (
            <EventHeatMap events={events} start={this.props.start} end={this.props.end}/>
        );
    }

});

module.exports = AlarmHeatMap;