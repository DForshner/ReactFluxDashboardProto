//

"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher');
var StationConveyorAlarmConstants = require('../constants/StationConveyorAlarmConstants');
var StationConveyorAlarmsWebApiUtils = require('../webapiutils/StationConveyorAlarmsWebApiUtils')
var Station = require('../domain/Station');

var StationConveyorAlarmActionCreators = {

  loadDefectData: function(station){
      console.assert(station instanceof Station);

      AppDispatcher.dispatch({
          action: StationConveyorAlarmConstants.ActionTypes.GET_CONVEYOR_ALARMS,
          payload: station
      });

      StationConveyorAlarmsWebApiUtils.getConveyorAlarms(station);
  }

};

module.exports = StationConveyorAlarmActionCreators;