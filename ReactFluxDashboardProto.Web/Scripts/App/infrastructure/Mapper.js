// Maps JSON strings to object types (classes).

"use strict";

var _ = require('lodash');

var Mapper = {

    mapTo: function(constructor, JSONString) {
        console.assert(typeof constructor === 'function');
        console.assert(typeof JSONString === 'string');

        var JSONObject = JSON.parse(JSONString);

        var mapped = _.extend(new constructor(), JSONObject);

        return mapped;
    },

    mapToArray: function(constructor, JSONString) {
        console.assert(typeof constructor === 'function');
        console.assert(typeof JSONString === 'string');

        var JSONObject = JSON.parse(JSONString);

        var singular = !_.isArray(JSONObject);
        var JSONObjects = singular ? (JSONObject ? [JSONObject] : []) : JSONObject.slice();

        var mappedArray = _.map(JSONObjects, function(obj) {
            return _.extend(new constructor(), obj);
        });

        return mappedArray;
    }
};

module.exports = Mapper;