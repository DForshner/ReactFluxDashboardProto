//

"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher');
var StationDetailsConstants = require('../constants/StationDetailConstants');
var Station = require('../domain/Station');

var StationDetailsActionCreators = {

  loadDefectData: function(station){
      console.assert(station instanceof Station);

      AppDispatcher.dispatch({
          action: StationDetailsConstants.ActionTypes.GET_DEFECT_DATA,
          payload: station
      });
  }

};

module.exports = StationDetailsActionCreators;