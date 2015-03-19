//

"use strict";

var DashboardConfiguration = require('../domain/DashboardConfiguration');
var Mapper = require('../infrastructure/Mapper');
var ConnectionError = require('../infrastructure/ConnectionError');
var URLBuilder = require('../infrastructure/URLBuilder');
var $ = require('jquery');

/** @const */
var ROUTE = "/api/dashboardconfiguration/";

var ConfigurationWebApiUtils = {

    getConfiguration: function(callback) {
        console.assert(typeof callback === 'function')

        var url = URLBuilder.build(ROUTE);

        $.ajax({
            url: url
        }).done(function(response) {
            var str = JSON.stringify(response);
            var config = Mapper.mapTo(DashboardConfiguration, str);
            callback(null, config);
        }).error(function(error) {
            // Always pass back a custom Error type
            callback(ConnectionError.createFromResponse(error), null);
        });
    },

    updateConfiguration: function(updatedConfig, callback) {
        console.assert(updatedConfig instanceof DashboardConfiguration);
        console.assert(typeof callback === 'function')

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
            callback(null, config);
        }).error(function(error) {
            // Always pass back a custom Error type
            callback(ConnectionError.createFromResponse(error), null);
        });
    }
};

module.exports = ConfigurationWebApiUtils;