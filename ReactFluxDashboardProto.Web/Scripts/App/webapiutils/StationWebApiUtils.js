// Station data access

"use strict";

var Line = require('../domain/Line');
var StationStatus = require('../domain/StationStatus');
var Mapper = require('../infrastructure/Mapper');
var ConnectionError = require('../infrastructure/ConnectionError');
var ServerActionCreators = require('../actions/ServerActionCreators');
var ErrorActionCreators = require('../actions/ErrorActionCreators');
var URLBuilder = require('../infrastructure/URLBuilder');
var $ = require('jquery');

/** @const */
var ROUTE = "/api/stationstatuses/";

var StationWebApiUtils = {

    getStationStatuses: function(line) {
        console.assert(line instanceof Line);

        var url = URLBuilder.build(ROUTE, { lineId: line.LineId });

        $.ajax({
            url: url
        }).done(function(response) {
            var str = JSON.stringify(response);
            var stationStatuses = Mapper.mapToArray(StationStatus, str);
            ServerActionCreators.receivedStationStatuses(line, stationStatuses);
        }).error(function(response) {
            var error = ConnectionError.createFromResponse(response);
            ErrorActionCreators.add(error);
        });
    }

};

module.exports = StationWebApiUtils;