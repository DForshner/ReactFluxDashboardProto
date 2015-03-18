// Global object that contains factory domain data, business
// logic to get/update/delete, and application state . Registers
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

var StationDetailConstants = require('../constants/StationDetailConstants');
var StationDetailWebApiUtils = require('../webapiutils/StationDetailWebApiUtils');

var ConfigurationConstants = require('../constants/ConfigurationConstants');
var ConfigurationWebApiUtils = require('../webapiutils/ConfigurationWebApiUtils');

var Station = require('../domain/Station');
var Line = require('../domain/Line');

// Private data/models

/** @const */
var CHANGED_EVENT = "FACTORYSTORE_CHANGED";

var lines = [];
var stations = [];
var stationDefects = [];
var configuration = {};
var errors = [];

// Public
var FactoryStore = assign({}, EventEmitter.prototype, {

    // ------------------------------------------ Accessor methods

    getAllLines: function() { return lines; },

    getAllStations: function(line) {
        console.assert(line instanceof Line);

        if (stations.hasOwnProperty(line.getHashCode())) {
            return stations[line.getHashCode()];
        }

        return [];
    },

    getStationDefects: function(station) {
        console.assert(station instanceof Station);

        if (stationDefects.hasOwnProperty(station.getHashCode())) {
            return stationDefects[station.getHashCode()];
        }

        return [];
    },

    getConfiguration: function() { return configuration; },

    getErrors: function() { return errors; },

    // ------------------------------------------ Event methods

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
AppDispatcher.register(function(event) {
    var action = event.action;

    if (typeof action === "undefined") {
        console.log("Undefined action: check constant ActionTypes");
    } else {
        console.log("Action: ", action, " Payload: ", event.payload);
    }

    switch( action ) {
        case LineConstants.ActionTypes.GET_ALL_LINES:
            LineWebApiUtils.getAllLines(function(err, data) {
                if (err) {
                    console.log("TODO: handle this", err.message);
                    return;
                }

                lines = data;
                FactoryStore.emitChange();
            } );
            break;

        case StationConstants.ActionTypes.GET_STATIONS:
            StationWebApiUtils.getStations(event.payload, function(err, data) {
                if (err) {
                    console.log("TODO: handle this", err.message);
                    return;
                }

                stations[data.line.getHashCode()] = data.stations;
                FactoryStore.emitChange();
            } );
            break;

        case StationDetailConstants.ActionTypes.GET_DEFECT_DATA:
            StationDetailWebApiUtils.getDefectData(event.payload, function(err, data) {
                if (err) {
                    console.log("TODO: handle this", err.message);
                    return;
                }

                stationDefects[data.station.getHashCode()] = data.defects;
                FactoryStore.emitChange();
            } );
            break;

        case ConfigurationConstants.ActionTypes.LOAD:
            ConfigurationWebApiUtils.getConfiguration(function(err, data) {
                if (err) {
                    console.log("TODO: handle this", err.message);
                    return;
                }

                configuration = data;
                FactoryStore.emitChange();
            } );
            break;

        case ConfigurationConstants.ActionTypes.UPDATE:
            ConfigurationWebApiUtils.updateConfiguration(event.payload, function(err, data) {
                if (err) {
                    console.log("TODO: handle this", err.message);
                    return;
                }

                configuration = data;
                FactoryStore.emitChange();
            });
            break;
    }

    return true;
});

module.exports = FactoryStore;