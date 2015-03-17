// Station data access

"use strict";

var StationWebApiUtils = {

    getAllStations: function( successCallback ) {
        console.assert(typeof successCallback === 'function')

        var data = [
            { Id: "A", Name: "Station A", Total:50 },
            { Id: "B", Name: "Station B", Total:100 }
        ];
        successCallback(data);
    }

};

module.exports = StationWebApiUtils;