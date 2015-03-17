// Station related constants

"use strict";

var keyMirror = require('keymirror');

var APIRoot = "http://localhost:35992/";

module.exports = {

    APIEndpoints: {
        SERIES: APIRoot + "api/stations"
    },

    EventTypes: keyMirror({
        CHANGE: null
    }),

    ActionTypes: keyMirror({
        GET_ALL_STATIONS: null
    })
};