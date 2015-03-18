// Standard design for web api utils

"use strict";

var ConnectionError = require('../Infrastructure/ConnectionError');

// Store route urls as private variables in the WebAPIUtils.  The rest of the app has no
// reason to know about how to access API data.
/** @const */
var URL = "";

var _StandardWebApiUtilsDesign = {

    getSomething: function(callback) {
        console.assert(typeof callback === 'function');

        var data = {}; // Get some data from an external API

        var ok = true;
        var err = (ok) ? null : new ConnectionError("Something bad happened to the internet.");

        // Async callbacks adopt Node's error first callback standard.
        // Note: We aren't throwing exceptions around we are passing them as arguments.
        callback(err, data);
    }

};

/* module.exports = _StandardWebApiUtilsDesign; */