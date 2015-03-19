// Global object that contains factory domain data, business
// logic to get/update/delete, and application state . Registers
// for events from the dispatcher and emits events to the
// event emitter.

// Stores that are part of one section of your application should be contained within a single store.
// Think of them like pages of your webapp, a modal or some other contained section.

"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ErrorStore = require('../stores/ErrorStore');

var ErrorConstants = require('../constants/ErrorConstants');

var LineConstants = require('../constants/LineConstants');
var LineWebApiUtils = require('../webapiutils/LineWebApiUtils');

var StationConstants = require('../constants/StationConstants');
var StationWebApiUtils = require('../webapiutils/StationWebApiUtils');

var StationDetailConstants = require('../constants/StationDetailConstants');
var StationDetailWebApiUtils = require('../webapiutils/StationDetailWebApiUtils');

var ConfigurationConstants = require('../constants/ConfigurationConstants');
var ConfigurationWebApiUtils = require('../webapiutils/ConfigurationWebApiUtils');

var Station = require('../domain/Station');
var Line = require('../domain/Line');

/** @const */
var CHANGED_EVENT = "FACTORYSTORE_CHANGED";

// Private
var _lines = [];
var _stations = [];
var _stationDefects = [];
var _configuration = null;
var _errors = [];

function _clearErrors() {
    _errors.length = 0;
}

// Public
var FactoryStore = assign({}, EventEmitter.prototype, {

    // ------------------------------------------ Accessor methods

    getAllLines: function() { return _lines; },

    getAllStations: function(line) {
        console.assert(line instanceof Line);

        if (_stations.hasOwnProperty(line.getHashCode())) {
            return _stations[line.getHashCode()];
        }

        return [];
    },

    getStationDefects: function(station) {
        console.assert(station instanceof Station);

        if (_stationDefects.hasOwnProperty(station.getHashCode())) {
            return _stationDefects[station.getHashCode()];
        }

        return [];
    },

    getConfiguration: function() { return configuration; },

    hasErrors: function() { return _errors.length > 0; },

    getErrors: function() { return _errors; },

    // ------------------------------------------ Event methods

    emitChange: function() {
        console.log("Errors: ", _errors);
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
AppDispatcher.register(function(event) {
    var action = event.action;

    if (typeof action === "undefined") {
        console.log("Undefined action: check constant ActionTypes");
    } else {
        console.log("Action: ", action, " Payload: ", event.payload);
    }

    // TODO: WebAPIUtils should be dispatching data via action creators not pushing directly into the datastore like this.

    switch( action ) {
        case LineConstants.ActionTypes.GET_ALL_LINES:
            LineWebApiUtils.getAllLines(function(err, data) {
                if (err) {
                    _errors.push(err);
                } else {
                    _lines = data;
                }

                FactoryStore.emitChange();
            } );
            break;

        case StationConstants.ActionTypes.GET_STATIONS:
            var line = event.payload;
            StationWebApiUtils.getStations(line, function(err, data) {
                if (err) {
                    _errors.push(err);
                } else {
                    _stations[line.getHashCode()] = data;
                }
                FactoryStore.emitChange();
            } );
            break;

        case StationDetailConstants.ActionTypes.GET_DEFECT_DATA:
            var station = event.payload;
            StationDetailWebApiUtils.getDefectData(station, function(err, data) {
                if (err) {
                    _errors.push(err);
                } else {
                    _stationDefects[station.getHashCode()] = data;
                }
                FactoryStore.emitChange();
            } );
            break;

        case ConfigurationConstants.ActionTypes.LOAD:
            ConfigurationWebApiUtils.getConfiguration(function(err, data) {
                if (err) {
                    _errors.push(err);
                } else {
                    _configuration = data;
                }
                FactoryStore.emitChange();
            } );
            break;

        case ConfigurationConstants.ActionTypes.UPDATE:
            var updatedConfig = event.payload;
            ConfigurationWebApiUtils.updateConfiguration(updatedConfig, function(err, data) {
                if (err) {
                    _errors.push(err);
                } else {
                    _configuration = data;
                }
                FactoryStore.emitChange();
            });
            break;

        case ErrorConstants.ActionTypes.CLEAR:
            _clearErrors();
            FactoryStore.emitChange();
            break;
    }

    return true;
});

module.exports = FactoryStore;