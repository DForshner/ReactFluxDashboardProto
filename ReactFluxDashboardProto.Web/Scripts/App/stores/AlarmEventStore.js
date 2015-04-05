// Alarms

"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Map = require('immutable').Map;

var StationConveyorAlarmConstants = require('../constants/StationConveyorAlarmConstants');
var StationEquipmentAlarmConstants = require('../constants/StationEquipmentAlarmConstants');

var Station = require('../domain/Station');
var Line = require('../domain/Line');

/** @const */
var CHANGED_EVENT = "ALARMEVENTSTORE_CHANGED";

var _stationConveyorAlarms = Map();
var _stationEquipmentAlarms = Map();

var AlarmEventStore = assign({}, EventEmitter.prototype, {

    // ------------------------------------------ Accessor methods

    getConveyorAlarms: function(station) {
        console.assert(station instanceof Station);

        if (_stationConveyorAlarms.has(station.getHashCode())) {
            return _stationConveyorAlarms.get(station.getHashCode());
        }

        return [];
    },

    getEquipmentAlarms: function(station) {
        console.assert(station instanceof Station);

        if (_stationEquipmentAlarms.has(station.getHashCode())) {
            return _stationEquipmentAlarms.get(station.getHashCode());
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
AlarmEventStore.dispatchToken = AppDispatcher.register(function(event) {
    var action = event.action;
    console.log("Action: ", action);

    switch( action ) {

        case StationConveyorAlarmConstants.ActionTypes.RECEIVED_CONVEYOR_ALARMS:
            var station = event.context;
            var defects = event.payload;
            _stationConveyorAlarms = _stationConveyorAlarms.set(station.getHashCode(), defects);
            AlarmEventStore.emitChange();
            break;

        case StationEquipmentAlarmConstants.ActionTypes.RECEIVED_EQUIPMENT_ALARMS:
            var station = event.context;
            var defects = event.payload;
            _stationEquipmentAlarms = _stationEquipmentAlarms.set(station.getHashCode(), defects);
            AlarmEventStore.emitChange();
            break;

        case void 0:
            console.log("Undefined action: check that ActionTypes constants are correct");
            break;

        default:
        // do nothing
    }

    return true;
});

module.exports = AlarmEventStore;