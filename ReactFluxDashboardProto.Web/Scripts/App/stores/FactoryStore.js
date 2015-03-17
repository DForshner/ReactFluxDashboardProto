// Global object that contains factory domain data/models
// and business logic to get/update/delete items. Registers
// for events from the dispatcher and emits events to the
// event emitter.

"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var LineConstants = require('../constants/LineConstants');
var LineWebApiUtils = require('../webapiutils/LineWebApiUtils');

var StationConstants = require('../constants/StationConstants');
var StationWebApiUtils = require('../webapiutils/StationWebApiUtils');

// Private data/models

var lines = [];
var stations = [];
var errors = [];

/** @const */
var CHANGED_EVENT = "FACTORYSTORE_CHANGED";

// Public
var FactoryStore = assign({}, EventEmitter.prototype, {

    // ------------------------------------------ Accessor methods

    getAllLines: function() {
        return lines;
    },

    getAllStations: function() {
        return stations;
    },

    getErrors: function(){
        return errors;
    },

    // ------------------------------------------ Emit Events

    emitChange: function() {
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
AppDispatcher.register(function(payload) {
    var action = payload.action;

    if (typeof action === "undefined") {
        console.log("Undefined action: check constant ActionTypes");
    } else {
        console.log("Action: ", action);
    }

    switch( action ) {
        case LineConstants.ActionTypes.GET_ALL_LINES:
            LineWebApiUtils.getAllLines(function(data) {
                lines = data;
                FactoryStore.emitChange()
            } );
            break;

        case StationConstants.ActionTypes.GET_ALL_STATIONS:
            StationWebApiUtils.getAllStations(function(data) {
                stations = data;
                FactoryStore.emitChange()
            } );
            break;
    }

    return true;
});

module.exports = FactoryStore;