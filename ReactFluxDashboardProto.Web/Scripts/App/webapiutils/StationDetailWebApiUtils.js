// Station details data access

"use strict";

var Station = require('../domain/Station');
var StationDefectCount = require('../domain/StationDefectCount');
var Mapper = require('../infrastructure/Mapper');
var ConnectionError = require('../infrastructure/ConnectionError');
var URLBuilder = require('../infrastructure/URLBuilder');
var $ = require('jquery');

/** @const */
var ROUTE = "/api/stationdefectcounts/";

var StationDetailWebApiUtils = {

    getDefectData: function(station, callback) {
        console.assert(station instanceof Station);
        console.assert(typeof callback === 'function');

        var url = URLBuilder.build(ROUTE, { lineId: station.LineId, stationId: station.StationId });

        $.ajax({
            url: url
        }).done(function(response) {
            var str = JSON.stringify(response);
            var defects = Mapper.mapToArray(StationDefectCount, str);
            callback(null, defects);
        }).error(function(response) {
            callback(ConnectionError.createFromResponse(response), null);
        });
    }
};

module.exports = StationDetailWebApiUtils;