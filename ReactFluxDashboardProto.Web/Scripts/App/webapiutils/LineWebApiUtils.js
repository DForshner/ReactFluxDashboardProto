// Line status data access

"use strict";

var LineStatus = require('../domain/LineStatus');
var Mapper = require('../infrastructure/Mapper');
var ConnectionError = require('../infrastructure/ConnectionError');
var ServerActionCreators = require('../actions/ServerActionCreators');
var GlobalErrorActionCreators = require('../actions/GlobalErrorActionCreators');
var URLBuilder = require('../infrastructure/URLBuilder');
var $ = require('jquery');

/** @const */
var ROUTE = "/api/linestatuses/";

var LineWebApiUtils = {

    getAllLines: function() {
        var url = URLBuilder.build(ROUTE);

        $.ajax({
            url: url
        }).done(function(response) {
            var str = JSON.stringify(response);
            var lineStatuses = Mapper.mapToArray(LineStatus, str);
            ServerActionCreators.receivedAllLineStatuses(lineStatuses);
        }).error(function(response) {
            var error = ConnectionError.createFromResponse(response);
            GlobalErrorActionCreators.add(error);
        });
    }
};

module.exports = LineWebApiUtils;