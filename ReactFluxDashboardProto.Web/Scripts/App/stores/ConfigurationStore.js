//

"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Map = require('immutable').Map;

var ConfigurationConstants = require('../constants/ConfigurationConstants');

/** @const */
var CHANGED_EVENT = "CONFIGURATION_CHANGED";

var _configuration = null;

var ConfigurationStore= assign({}, EventEmitter.prototype, {

    // ------------------------------------------ Accessor methods

    getConfiguration: function() { return _configuration; },

    // ------------------------------------------ Event methods

    emitChange: function() {
        console.log("Emit changed event");
        this.emit(CHANGED_EVENT);
    },

    bind: function(callback) {
        console.assert(typeof callback === 'function');
        this.on(CHANGED_EVENT, callback);
    },

    unbind: function(callback) {
        console.assert(typeof callback === 'function');
        this.removeListener(CHANGED_EVENT, callback);
    }
});

// Configure store to respond to events dispatched by views.
ConfigurationStore.dispatchToken = AppDispatcher.register(function(event) {
    var action = event.action;
    console.log("Action: ", action, " Payload: ", event.payload);

    switch(action) {

        case ConfigurationConstants.ActionTypes.LOADED:
            _configuration = event.payload;
            ConfigurationStore.emitChange();
            break;

        case ConfigurationConstants.ActionTypes.UPDATED:
            _configuration = event.payload;
            ConfigurationStore.emitChange();
            break;

        case void 0:
            console.log("Undefined action: check that ActionTypes constants are correct");
            break;

        default:
        // do nothing
    }

    return true;
});

module.exports = ConfigurationStore;