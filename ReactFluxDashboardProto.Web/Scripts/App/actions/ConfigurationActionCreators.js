// Called by the view to dispatch configuration related events.

"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher');
var ConfigurationConstants = require('../constants/ConfigurationConstants');

var ConfigurationActions = {

    update: function(payload) {
        AppDispatcher.dispatch({
            action: ConfigurationConstants.ActionTypes.UPDATE,
            payload: payload
        });
    },

    load: function(){
        AppDispatcher.dispatch({
            action: ConfigurationConstants.ActionTypes.LOAD,
            payload: {}
        });
    }
};

module.exports = ConfigurationActions;