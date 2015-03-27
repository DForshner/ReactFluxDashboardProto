"use strict";

var keyMirror = require('keymirror');

var StationEquipmentAlarmConstants = {

    ActionTypes: keyMirror({
        GET_EQUIPMENT_ALARMS: null,
        RECEIVED_EQUIPMENT_ALARMS: null
    })

};

module.exports = StationEquipmentAlarmConstants;