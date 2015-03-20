//

"use strict";

var DashboardConfiguration = require('../domain/DashboardConfiguration');
var Mapper = require('../infrastructure/Mapper');
var ServerActionCreators = require('../actions/ServerActionCreators');
var ErrorActionCreators = require('../actions/ErrorActionCreators');
var ConnectionError = require('../infrastructure/ConnectionError');
var URLBuilder = require('../infrastructure/URLBuilder');
var $ = require('jquery');

/** @const */
var ROUTE = "/api/dashboardconfiguration/";

var ConfigurationWebApiUtils = {

    getConfiguration: function() {
        var url = URLBuilder.build(ROUTE);

        $.ajax({
            url: url
        }).done(function(response) {
            var str = JSON.stringify(response);
            var config = Mapper.mapTo(DashboardConfiguration, str);
            ServerActionCreators.recievedConfig(config);
        }).error(function(response) {
            // Always pass back a custom Error type
            var error = ConnectionError.createFromResponse(response);
            ErrorActionCreators.add(error);
        });
    },

    updateConfiguration: function(updatedConfig) {
        console.assert(updatedConfig instanceof DashboardConfiguration);

        var url = URLBuilder.build(ROUTE);
        var payload = JSON.stringify(updatedConfig);

        $.ajax({
            url: url,
            method: "PUT",
            dataType: 'json',
            contentType: 'application/json',
            data: payload
        }).done(function(response) {
            var str = JSON.stringify(response);
            var config = Mapper.mapTo(DashboardConfiguration, str);
            ServerActionCreators.receiveUpdatedConfig(config);
        }).error(function(response) {
            var error = ConnectionError.createFromResponse(response);
            ErrorActionCreators.add(error);
        });
    }
};

module.exports = ConfigurationWebApiUtils;