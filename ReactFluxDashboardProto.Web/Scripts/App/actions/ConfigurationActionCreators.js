// Called by the view to dispatch configuration related events.

"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher');
var ConfigurationConstants = require('../constants/ConfigurationConstants');
var ConfigurationWebApiUtils = require('../webapiutils/ConfigurationWebApiUtils');

var ConfigurationActionCreators = {

    update: function(updatedConfig) {
        AppDispatcher.dispatch({
            action: ConfigurationConstants.ActionTypes.UPDATE,
            payload: updatedConfig
        });

        ConfigurationWebApiUtils.updateConfiguration(updatedConfig);
    },

    receiveUpdated: function(updatedConfig) {
        AppDispatcher.dispatch({
            action: ConfigurationConstants.ActionTypes.UPDATED,
            payload: updatedConfig
        });
    },

    load: function(){
        AppDispatcher.dispatch({
            action: ConfigurationConstants.ActionTypes.LOAD,
            payload: {}
        });

        ConfigurationWebApiUtils.getConfiguration();
    },

    loaded: function(config){
        AppDispatcher.dispatch({
            action: ConfigurationConstants.ActionTypes.LOADED,
            payload: config
        });
    }

};

module.exports = ConfigurationActionCreators;