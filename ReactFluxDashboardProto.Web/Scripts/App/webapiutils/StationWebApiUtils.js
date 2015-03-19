// Station data access

"use strict";

var Line = require('../domain/Line');
var StationStatus = require('../domain/StationStatus');
var Mapper = require('../infrastructure/Mapper');
var ConnectionError = require('../infrastructure/ConnectionError');
var URLBuilder = require('../infrastructure/URLBuilder');
var $ = require('jquery');

/** @const */
var ROUTE = "/api/stationstatuses/";

var StationWebApiUtils = {

    getStations: function(line, callback) {
        console.assert(line instanceof Line);
        console.assert(typeof callback === 'function')

        var url = URLBuilder.build(ROUTE, { lineId: line.LineId });

        $.ajax({
            url: url
        }).done(function(response) {
            var str = JSON.stringify(response);
            var stationStatuses = Mapper.mapToArray(StationStatus, str);
            callback(null, stationStatuses);
        }).error(function(response) {
            callback(ConnectionError.createFromResponse(response), null);
        });
    }

};

module.exports = StationWebApiUtils;