// Station constants

"use strict";

var keyMirror = require('keymirror');

var StationConstants = {

    ActionTypes: keyMirror({
        GET_STATION_STATUSES: null,
        RECEIVED_STATION_STATUSES: null
    })

};

module.exports = StationConstants;