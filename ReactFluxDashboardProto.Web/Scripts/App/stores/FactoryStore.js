

"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Map = require('immutable').Map;

var LineConstants = require('../constants/LineConstants');
var StationConstants = require('../constants/StationConstants');
var StationDetailConstants = require('../constants/StationDetailConstants');

var Station = require('../domain/Station');
var Line = require('../domain/Line');

/** @const */
var CHANGED_EVENT = "FACTORYSTORE_CHANGED";

var _lines = [];
var _stationsIds = Map();
var _stations = Map();
var _stationDefects = Map();

var FactoryStore = assign({}, EventEmitter.prototype, {

    // ------------------------------------------ Accessor methods

    getAllLines: function() { return _lines; },

    getStationIds: function(line) {
        console.assert(line instanceof Line);

        if (_stationsIds.has(line.getHashCode())) {
            return _stationsIds.get(line.getHashCode());
        }

        return [];
    },

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
    console.log("Action: ", action, " Payload: ", event.payload);

    switch( action ) {

        case LineConstants.ActionTypes.RECEIVED_LINE_STATUSES:
            _lines = event.payload;
            FactoryStore.emitChange();
            break;

        case StationConstants.ActionTypes.RECEIVED_STATION_IDS:
            var line = event.context;
            var ids = event.payload;
            _stationsIds = _stationsIds.set(line.getHashCode(), ids);
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

        case void 0:
            console.log("Undefined action: check that ActionTypes constants are correct");
            break;

        default:
            // do nothing
    }

    return true;
});

module.exports = FactoryStore;