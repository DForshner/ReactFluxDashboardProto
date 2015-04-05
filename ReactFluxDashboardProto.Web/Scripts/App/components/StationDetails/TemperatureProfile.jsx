// Station temperature profile.

"use strict";

var React = require("react");
var Chart = require("../Common/MultiSeriesLineChart.jsx");

var TemperatureProfile = React.createClass({

    render: function() {
        return (
            <div className="TemperatureProfile">
                <Chart />
            </div>
        );
    }

});

module.exports = TemperatureProfile;