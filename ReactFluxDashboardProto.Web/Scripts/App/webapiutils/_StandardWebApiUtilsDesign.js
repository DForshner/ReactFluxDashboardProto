// Standard design for web api utils

"use strict";

var ConnectionError = require('../Infrastructure/ConnectionError');

// Store route urls as private variables in the WebAPIUtils.  The rest of the app has no
// reason to know about how to access API data.
/** @const */
var ROUTE = "/api/businessthings/";

var _StandardWebApiUtilsDesign = {

    getBusinessThings: function(callback) {
        console.assert(typeof callback === 'function');

        var url = URLBuilder.build(ROUTE);

        if (!$.ajax({
                url: url
            }).done(function (response) {

                // Parse the strings into some kind of meaningful domain type.
                var str = JSON.stringify(response);
                var importantBusinessThings = Mapper.mapToArray(importantBusinessThing, str);

                // Don't just pass strings of arrays of strings of string strings arrays
                // into business logic!  Dynamically typed languages still have types!
                callback(null, importantBusinessThings);
            }).error(function (error) {

                // Async callbacks adopt Node's error first callback standard.
                // Note: We aren't throwing exceptions around we are passing them as arguments.
                // When an error occurs always pass back a custom Error type. Don't let HTTP
                // related details leak into business logic! P.S. Don't pass strings!
                callback(ConnectionError.createFromResponse(error), null);
            })) {
        }
    }

};

/* module.exports = _StandardWebApiUtilsDesign; */