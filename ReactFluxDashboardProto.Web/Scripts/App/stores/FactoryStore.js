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
var Map = require('immutable').Map;

var LineConstants = require('../constants/LineConstants');
var StationConstants = require('../constants/StationConstants');
var StationDetailConstants = require('../constants/StationDetailConstants');
var ConfigurationConstants = require('../constants/ConfigurationConstants');

var Station = require('../domain/Station');
var Line = require('../domain/Line');

/** @const */
var CHANGED_EVENT = "FACTORYSTORE_CHANGED";

var _lines = [];
var _stations = Map();
var _stationDefects = Map();
var _configuration = null;

var FactoryStore = assign({}, EventEmitter.prototype, {

    // ------------------------------------------ Accessor methods

    getAllLines: function() { return _lines; },

    getAllStations: function(line) {
        console.assert(line instanceof Line);

        if (_stations.has(line.getHashCode())) {
            return _stations.get(line.getHashCode());
        }

        return [];
    },

    getStationDefects: function(station) {
        console.assert(station instanceof Station);

        if (_stationDefects.has(station.getHashCode())) {
            return _stationDefects.get(station.getHashCode());
        }

        return [];
    },

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
FactoryStore.dispatchToken = AppDispatcher.register(function(event) {
    var action = event.action;

    if (typeof action === "undefined") {
        console.log("Undefined action: check that ActionTypes constants are correct");
        return true;
    }

    console.log("Action: ", action, " Payload: ", event.payload);

    switch( action ) {

        case LineConstants.ActionTypes.RECEIVED_LINE_STATUSES:
            _lines = event.payload;
            FactoryStore.emitChange();
            break;

        case StationConstants.ActionTypes.RECEIVED_STATION_STATUSES:
            var line = event.context;
            var stationStatuses = event.payload;
            _stations = _stations.set(line.getHashCode(), stationStatuses);
            FactoryStore.emitChange();
            break;

        case StationDetailConstants.ActionTypes.RECEIVED_DEFECT_DATA:
            var station = event.context;
            var defects = event.payload;
            _stationDefects = _stationDefects.set(station.getHashCode(), defects);
            FactoryStore.emitChange();
            break;

        case ConfigurationConstants.ActionTypes.LOADED:
            _configuration = event.payload;
            FactoryStore.emitChange();
            break;

        case ConfigurationConstants.ActionTypes.UPDATED:
            _configuration = event.payload;
            FactoryStore.emitChange();
            break;

        default:
            // do nothing
    }

    return true;
});

module.exports = FactoryStore;