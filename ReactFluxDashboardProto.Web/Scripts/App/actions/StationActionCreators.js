"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher');
var StationConstants = require('../constants/StationConstants');

var StationActions = {

  loadAll: function(){
    AppDispatcher.dispatch({
        action: StationConstants.ActionTypes.GET_ALL_STATIONS,
        payload: {}
    });
  }

};

module.exports = StationActions;