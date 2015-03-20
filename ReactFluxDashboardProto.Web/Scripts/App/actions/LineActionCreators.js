//

"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher');
var LineConstants = require('../constants/LineConstants');
var LineWebApiUtils = require('../webapiutils/LineWebApiUtils');

var LineActionCreators = {

    loadAll: function(){
        AppDispatcher.dispatch({
            action: LineConstants.ActionTypes.GET_LINE_STATUSES,
            payload: {}
        });
        LineWebApiUtils.getAllLines();
    }

};

module.exports = LineActionCreators;