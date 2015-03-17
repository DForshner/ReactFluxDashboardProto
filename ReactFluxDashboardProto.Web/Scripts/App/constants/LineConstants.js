var keyMirror = require('keymirror');

var APIRoot = "http://localhost:35992/";

module.exports = {

    APIEndpoints: {
        SERIES: APIRoot + "api/lines"
    },

    EventTypes: keyMirror({
        CHANGE: null
    }),

    ActionTypes: keyMirror({
        GET_ALL_LINES: null
    })
};