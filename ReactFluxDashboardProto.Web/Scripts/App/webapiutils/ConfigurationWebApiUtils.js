//

"use strict";

var ConfigurationWebApiUtils = {

    getConfiguration: function( successCallback ) {
        var data = {
            Line1MinRate: 10,
            Line1MaxRate: 100,
            Line1Description: "",
            Line1AlarmType: "",

            Line2MinRate: 10,
            Line2MaxRate: 100,
            Line2Description: "",
            Line2AlarmType: ""
        };
        successCallback(data);
    }

};

module.exports = ConfigurationWebApiUtils;