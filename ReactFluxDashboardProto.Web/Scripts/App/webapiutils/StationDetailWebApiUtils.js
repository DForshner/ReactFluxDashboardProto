// Station details data access

"use strict";

var Station = require('../domain/Station');

/** @const */
var URL = "";

var _data = [
    { Type: "Defect A", Count: 50 },
    { Type: "Defect B", Count: 100 },
    { Type: "Defect C", Count: 200 }
];

var StationDetailWebApiUtils = {

    getDefectData: function(station, callback) {
        console.assert(station instanceof Station);
        console.assert(typeof callback === 'function');

        console.log("Getting defect data for ", station.LineId, " ", station.StationId);

        var err = {};
        var data = { station: station, defects: _data.concat({ Type: "Defect " + station.StationId, Count: 50 }) };
        callback(err ,data);
    }

};

module.exports = StationDetailWebApiUtils;