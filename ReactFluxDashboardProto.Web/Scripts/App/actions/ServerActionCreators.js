// Called by the view to dispatch configuration related events.

"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher');
var ConfigurationConstants = require('../constants/ConfigurationConstants');
var LineConstants = require('../constants/LineConstants');
var StationConstants = require('../constants/StationConstants');
var StationDetailConstants = require('../constants/StationDetailConstants');
var StationEquipmentAlarmConstants = require('../constants/StationEquipmentAlarmConstants');
var StationConveyorAlarmConstants = require('../constants/StationConveyorAlarmConstants');

var ServerActionCreators = {

    receiveUpdatedConfig: function(updatedConfig) {
        AppDispatcher.dispatch({
            action: ConfigurationConstants.ActionTypes.UPDATED,
            payload: updatedConfig
        });
    },

    receivedConfig: function(config){
        AppDispatcher.dispatch({
            action: ConfigurationConstants.ActionTypes.LOADED,
            payload: config
        });
    },

    receivedAllLineStatuses: function(lineStatuses){
        AppDispatcher.dispatch({
            action: LineConstants.ActionTypes.RECEIVED_LINE_STATUSES,
            payload: lineStatuses
        });
    },

    receivedStationIds: function(line, ids){
        AppDispatcher.dispatch({
            action: StationConstants.ActionTypes.RECEIVED_STATION_IDS,
            context: line,
            payload: ids
        });
    },

    receivedStationStatuses: function(line, stationStatuses){
        AppDispatcher.dispatch({
            action: StationConstants.ActionTypes.RECEIVED_STATION_STATUSES,
            context: line,
            payload: stationStatuses
        });
    },

    receivedStationDetails: function(station, stationDetails){
        AppDispatcher.dispatch({
            action: StationDetailConstants.ActionTypes.RECEIVED_DEFECT_DATA,
            context: station,
            payload: stationDetails
        });
    },

    receivedConveyorAlarms: function(station, alarms){
        AppDispatcher.dispatch({
            action: StationConveyorAlarmConstants.ActionTypes.RECEIVED_EQUIPMENT_ALARMS,
            context: station,
            payload: alarms
        });
    },

    receivedEquipmentAlarms: function(station, alarms){
        AppDispatcher.dispatch({
            action: StationEquipmentAlarmConstants.ActionTypes.RECEIVED_EQUIPMENT_ALARMS,
            context: station,
            payload: alarms
        });
    }
};

module.exports = ServerActionCreators;