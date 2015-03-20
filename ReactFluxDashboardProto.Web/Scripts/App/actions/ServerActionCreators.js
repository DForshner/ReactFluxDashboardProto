// Called by the view to dispatch configuration related events.

"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher');
var ConfigurationConstants = require('../constants/ConfigurationConstants');
var LineConstants = require('../constants/LineConstants');
var StationConstants = require('../constants/StationConstants');
var StationDetailConstants = require('../constants/StationDetailConstants');

var ServerActionCreators = {

    receiveUpdatedConfig: function(updatedConfig) {
        AppDispatcher.dispatch({
            action: ConfigurationConstants.ActionTypes.UPDATED,
            payload: updatedConfig
        });
    },

    recievedConfig: function(config){
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
    }
};

module.exports = ServerActionCreators;