"use strict";

var keyMirror = require('keymirror');

var StationConveyorAlarmConstants = {

    ActionTypes: keyMirror({
        GET_CONVEYOR_ALARMS: null,
        RECEIVED_CONVEYOR_ALARMS: null
    })

};

module.exports = StationConveyorAlarmConstants;