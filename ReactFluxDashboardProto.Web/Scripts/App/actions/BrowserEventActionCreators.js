//

"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher');
var ToolTipConstants = require('../constants/ToolTipConstants');
var StationDetailWebApiUtils = require('../webapiutils/StationDetailWebApiUtils')
var Station = require('../domain/Station');

var BrowserEventActionCreators = {

    updatePointerLocation: function(){

        AppDispatcher.dispatch({
            action: ToolTipConstants.ActionTypes.GET_DEFECT_DATA,
            payload: {}
        });

        StationDetailWebApiUtils.getDefectData(station)
    }

};
d
module.exports = BrowserEventActionCreators;