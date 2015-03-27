// Station details data access

"use strict";

var Station = require('../domain/Station');
var StationDefectCount = require('../domain/StationDefectCount');
var Mapper = require('../infrastructure/Mapper');
var ConnectionError = require('../infrastructure/ConnectionError');
var ServerActionCreators = require('../actions/ServerActionCreators');
var GlobalErrorActionCreators = require('../actions/GlobalErrorActionCreators');
var URLBuilder = require('../infrastructure/URLBuilder');
var $ = require('jquery');

/** @const */
var ROUTE = "/api/stationdefectcounts/";

var StationDetailWebApiUtils = {

    getDefectData: function(station) {
        console.assert(station instanceof Station);

        var url = URLBuilder.build(ROUTE, { lineId: station.LineId, stationId: station.StationId });

        $.ajax({
            url: url
        }).done(function(response) {
            var str = JSON.stringify(response);
            var defects = Mapper.mapToArray(StationDefectCount, str);
            ServerActionCreators.receivedStationDetails(station, defects);
        }).error(function(response) {
            var error = ConnectionError.createFromResponse(response);
            GlobalErrorActionCreators.add(error);
        });
    }
};

module.exports = StationDetailWebApiUtils;