var AppDispatcher = require('../dispatcher/AppDispatcher');
var ConfigurationConstants = require('../constants/ConfigurationConstants');
var ConfigurationWebApiUtils = require('../webapiutils/ConfigurationWebApiUtils');

// Called by the view to dispatch configuration related events.
var ConfigurationActions = {

    update: function(payload) {
        AppDispatcher.handleServerAction({
            type: ConfigurationConstants.ActionTypes.UPDATE,
            payload: payload
        });
    },

    load: function(){
        ConfigurationWebApiUtils.get(ConfigurationActions.LOAD);
    }
};

module.exports = ConfigurationActions;