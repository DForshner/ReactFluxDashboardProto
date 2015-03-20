//

"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher');
var ErrorConstants = require('../constants/ErrorConstants');

var ErrorActionCreators = {

    add: function(error){
        console.assert(error instanceof Error);

        AppDispatcher.dispatch({
            action: ErrorConstants.ActionTypes.ADD,
            payload: error
        });
    },

    clear: function(){
        AppDispatcher.dispatch({
            action: ErrorConstants.ActionTypes.CLEAR,
            payload: {}
        });
    }

};

module.exports = ErrorActionCreators;