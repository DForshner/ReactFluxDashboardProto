// Station data access

"use strict";

var Line = require('../domain/Line');
var StationId = require('../domain/StationId');
var StationStatus = require('../domain/StationStatus');
var Mapper = require('../infrastructure/Mapper');
var ConnectionError = require('../infrastructure/ConnectionError');
var ServerActionCreators = require('../actions/ServerActionCreators');
var GlobalErrorActionCreators = require('../actions/GlobalErrorActionCreators');
var URLBuilder = require('../infrastructure/URLBuilder');
var $ = require('jquery');

var ID_ROUTE = "/api/stations/";
var STATUS_ROUTE = "/api/stationstatuses/";

var StationWebApiUtils = {

    getStationsIds: function(line) {
        console.assert(line instanceof Line);

        var url = URLBuilder.build(ID_ROUTE, { lineId: line.LineId });

        $.ajax({
            url: url
        }).done(function(response) {
            var str = JSON.stringify(response);
            var ids = Mapper.mapToArray(StationId, str);
            ServerActionCreators.receivedStationIds(line, ids);
        }).error(function(response) {
            var error = ConnectionError.createFromResponse(response);
            GlobalErrorActionCreators.add(error);
        });
    },

    getStationStatuses: function(line) {
        console.assert(line instanceof Line);

        var url = URLBuilder.build(STATUS_ROUTE, { lineId: line.LineId });

        $.ajax({
            url: url
        }).done(function(response) {
            var str = JSON.stringify(response);
            var stationStatuses = Mapper.mapToArray(StationStatus, str);
            ServerActionCreators.receivedStationStatuses(line, stationStatuses);
        }).error(function(response) {
            var error = ConnectionError.createFromResponse(response);
            GlobalErrorActionCreators.add(error);
        });
    }

};

module.exports = StationWebApiUtils;