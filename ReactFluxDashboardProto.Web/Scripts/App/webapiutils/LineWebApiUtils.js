// Line status data access

"use strict";

var LineStatus = require('../domain/LineStatus');
var Mapper = require('../infrastructure/Mapper');
var ConnectionError = require('../infrastructure/ConnectionError');
var URLBuilder = require('../infrastructure/URLBuilder');
var $ = require('jquery');

/** @const */
var ROUTE = "/api/linestatuses/";

var LineWebApiUtils = {

    getAllLines: function(callback) {
        console.assert(typeof callback === 'function')

        var url = URLBuilder.build(ROUTE);

        $.ajax({
            url: url
        }).done(function(response) {
            var str = JSON.stringify(response);
            var lineStatuses = Mapper.mapToArray(LineStatus, str);
            callback(null, lineStatuses);
        }).error(function(error) {
            // Always pass back a custom Error type
            callback(ConnectionError.createFromResponse(error), null);
        });
    }
};

module.exports = LineWebApiUtils;