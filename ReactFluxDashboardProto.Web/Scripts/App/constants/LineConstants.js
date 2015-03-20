// Line constants

"use strict";

var keyMirror = require('keymirror');

var LineConstants = {

    ActionTypes: keyMirror({
        GET_LINE_STATUSES: null,
        RECEIVED_LINE_STATUSES: null
    })

};

module.exports = LineConstants;
