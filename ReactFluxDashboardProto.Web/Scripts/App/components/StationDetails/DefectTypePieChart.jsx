// Defect types shown in a pie chart.

"use strict";

var React = require("react");
var PieChart = require("../Common/PieChart.jsx");
var PieChartSlice = require("../../domain/PieChartSlice");
var StationDefectCount = require("../../domain/StationDefectCount");

var DefectTypePieChart = React.createClass({

    propTypes: {
        defectCounts: React.PropTypes.oneOfType([
            React.PropTypes.arrayOf(Object),
            React.PropTypes.arrayOf(StationDefectCount).isRequired
        ]).isRequired
    },

    render: function() {
        var defectCounts = this.props.defectCounts;
        var slices = defectCounts.map(function(defectCount) {
            return new PieChartSlice(defectCount.Type, defectCount.Count);
        });
        return (
            <PieChart slices={slices}/>
        );
    }
});

module.exports = DefectTypePieChart;