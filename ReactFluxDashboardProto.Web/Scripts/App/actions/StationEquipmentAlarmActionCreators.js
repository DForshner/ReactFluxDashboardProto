//

"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher');
var StationEquipmentAlarmConstants = require('../constants/StationEquipmentAlarmConstants');
var StationEquipmentAlarmsWebApiUtils = require('../webapiutils/StationEquipmentAlarmsWebApiUtils')
var Station = require('../domain/Station');

var StationEquipmentAlarmActionCreators = {

  loadDefectData: function(station){
      console.assert(station instanceof Station);

      AppDispatcher.dispatch({
          action: StationEquipmentAlarmConstants.ActionTypes.GET_EQUIPMENT_ALARMS,
          payload: station
      });

      StationEquipmentAlarmsWebApiUtils.getEquipmentAlarms(station);
  }

};

module.exports = StationEquipmentAlarmActionCreators;