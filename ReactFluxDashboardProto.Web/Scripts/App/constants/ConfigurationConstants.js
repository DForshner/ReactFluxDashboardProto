//

"use strict";

var keyMirror = require('keymirror');

var ConfigurationConstants = {

    ActionTypes: keyMirror({
        LOAD: null,
        LOADED: null,
        UPDATE: null,
        UPDATED: null
    })

};

module.exports = ConfigurationConstants;