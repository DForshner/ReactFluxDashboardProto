// Build URLs

"use strict";

var _ = require('lodash');

var URLBuilder = {

    build: function(route, parameters) {
        console.assert(route.charAt(0) === '/');

        var origin = window.location.origin;

        if (!parameters) {
            return origin.concat(route);
        }

        var queryParameters = _.reduce(parameters, function(result, value, key) {
            return result + key + "=" + value + "&";
        }, "/?");

        return origin.concat(route, queryParameters.slice(0, -1));
    }

};

module.exports = URLBuilder;