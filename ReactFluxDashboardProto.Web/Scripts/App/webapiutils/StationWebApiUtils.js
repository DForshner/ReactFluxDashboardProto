// Station data access

"use strict";

var Line = require('../domain/Line');

/** @const */
var URL = "";

var StationWebApiUtils = {

    getStations: function(line, callback) {
        console.assert(line instanceof Line);
        console.assert(typeof callback === 'function')

        var data = [
            { Id: "A", Name: "Station A", Total:50 },
            { Id: "B", Name: "Station B", Total:100 }
        ];

        var err = {};
        var data = { line: line, stations: data };
        callback(err, data);
    }

};

module.exports = StationWebApiUtils;