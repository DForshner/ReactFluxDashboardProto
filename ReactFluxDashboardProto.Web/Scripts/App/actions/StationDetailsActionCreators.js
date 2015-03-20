//

"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher');
var StationDetailsConstants = require('../constants/StationDetailConstants');
var StationDetailWebApiUtils = require('../webapiutils/StationDetailWebApiUtils')
var Station = require('../domain/Station');

var StationDetailsActionCreators = {

  loadDefectData: function(station){
      console.assert(station instanceof Station);

      AppDispatcher.dispatch({
          action: StationDetailsConstants.ActionTypes.GET_DEFECT_DATA,
          payload: station
      });

      StationDetailWebApiUtils.getDefectData(station)
  }

};

module.exports = StationDetailsActionCreators;