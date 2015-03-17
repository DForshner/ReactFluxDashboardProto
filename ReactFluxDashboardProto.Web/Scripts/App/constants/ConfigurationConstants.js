var keyMirror = require('keymirror');

var ConfigurationConstants = {

    EventTypes: keyMirror({
        CHANGE: null
    }),

    ActionTypes: keyMirror({
        LOAD: null,
        UPDATE: null
    })
}

module.exports = ConfigurationConstants;