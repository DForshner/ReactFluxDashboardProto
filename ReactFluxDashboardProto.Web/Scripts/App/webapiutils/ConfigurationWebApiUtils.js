//

"use strict";

/** @const */
var URL = "";

var _fakeData = {
    Line1MinRate: 10,
    Line1MaxRate: 100,
    Line1Description: "",

    Line2MinRate: 10,
    Line2MaxRate: 100,
    Line2Description: ""
};

var ConfigurationWebApiUtils = {

    getConfiguration: function(callback) {
        console.assert(typeof callback === 'function')

        var err = {};
        callback(err, _fakeData);
    },

    updateConfiguration: function(updatedConfig, callback) {
        console.assert(typeof callback === 'function')

        _fakeData = updatedConfig;

        var err = {};
        callback(err, _fakeData);
    }
};

module.exports = ConfigurationWebApiUtils;