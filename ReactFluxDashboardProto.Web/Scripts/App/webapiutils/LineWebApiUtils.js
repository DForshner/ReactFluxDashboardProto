// Line data access

"use strict";

/** @const */
var URL = "";

var LineWebApiUtils = {

    getAllLines: function(callback) {
        console.assert(typeof callback === 'function')

        var err = {};
        var data = [
            { Id: "A", Name: "Line A", Total:50 },
            { Id: "B", Name: "Line B", Total:100 }
        ];
        callback(err, data);
    }

};

module.exports = LineWebApiUtils;