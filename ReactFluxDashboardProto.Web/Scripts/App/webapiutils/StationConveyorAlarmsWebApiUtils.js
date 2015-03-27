// Station data access

"use strict";

var Station = require('../domain/Station');
var AlarmEvent = require('../domain/AlarmEvent');
var Mapper = require('../infrastructure/Mapper');
var ConnectionError = require('../infrastructure/ConnectionError');
var ServerActionCreators = require('../actions/ServerActionCreators');
var GlobalErrorActionCreators = require('../actions/GlobalErrorActionCreators');
var URLBuilder = require('../infrastructure/URLBuilder');
var $ = require('jquery');

/** @const */
var ROUTE = "/api/conveyoralarms/";

var StationConveyorAlarmsWebApiUtils = {

    getConveyorAlarms: function(station) {
        console.assert(station instanceof Station);

        var url = URLBuilder.build(ROUTE, { lineId: station.LineId, stationId: station.StationId });

        $.ajax({
            url: url
        }).done(function(response) {
            var str = JSON.stringify(response);
            var alarms = Mapper.mapToArray(AlarmEvent, str);
            ServerActionCreators.receivedConveyorAlarms(station, alarms);
        }).error(function(response) {
            var error = ConnectionError.createFromResponse(response);
            GlobalErrorActionCreators.add(error);
        });
    }

};

module.exports = StationConveyorAlarmsWebApiUtils;