//

"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher');
var StationConstants = require('../constants/StationConstants');
var Line = require('../domain/Line');

var StationActionCreators = {

  loadAll: function(line){
      console.assert(line instanceof Line);

      AppDispatcher.dispatch({
          action: StationConstants.ActionTypes.GET_STATIONS,
          payload: line
      });
  }
};

module.exports = StationActionCreators;