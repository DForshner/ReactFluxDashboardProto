// Line data access

"use strict";

var LineWebApiUtils = {

    getAllLines: function( successCallback ) {
        console.assert(typeof successCallback === 'function')

        var data = [
            { Id: "A", Name: "Line A", Total:50 },
            { Id: "B", Name: "Line B", Total:100 }
        ];
        successCallback(data);
    }

};

module.exports = LineWebApiUtils;