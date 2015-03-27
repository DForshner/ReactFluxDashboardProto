"use strict";

var keyMirror = require('keymirror');

var StationDetailConstants = {

    ActionTypes: keyMirror({
        GET_DEFECT_DATA: null,
        RECEIVED_DEFECT_DATA: null
    })

};

module.exports = StationDetailConstants;