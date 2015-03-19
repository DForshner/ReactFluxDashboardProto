//

"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher');
var ErrorConstants = require('../constants/ErrorConstants');

var ErrorActionCreators = {

    clear: function(){
        AppDispatcher.dispatch({
            action: ErrorConstants.ActionTypes.CLEAR,
            payload: {}
        });
    }

};

module.exports = ErrorActionCreators;