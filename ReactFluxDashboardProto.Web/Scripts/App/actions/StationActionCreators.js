//

"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher');
var StationConstants = require('../constants/StationConstants');
var Line = require('../domain/Line');
var StationWebApiUtils = require('../webapiutils/StationWebApiUtils');

var StationActionCreators = {

  loadStationStatuses: function(line){
      AppDispatcher.dispatch({
          action: StationConstants.ActionTypes.GET_STATION_STATUSES,
          payload: line
      });
      StationWebApiUtils.getStationStatuses(line);
  }
};

module.exports = StationActionCreators;