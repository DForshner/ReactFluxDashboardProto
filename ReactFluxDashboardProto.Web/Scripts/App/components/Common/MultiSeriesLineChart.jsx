"use strict";

var React = require("react");
var d3 = require("d3");
var _ = require("lodash");
var ChartBody = require('./MultiSeriesLineChart/ChartBody.jsx');
var DataSeries = require('./MultiSeriesLineChart/DataSeries.jsx');

// TODO: Get this data from server
var _temperatures = {
    sensor1: [ { x: 0, y: 20 }, { x: 1, y: 30 }, { x: 2, y: 10 }, { x: 3, y: 5 }, { x: 4, y: 8 }, { x: 5, y: 15 }, { x: 6, y: 10 } ],
    sensor2: [ { x: 0, y: 8 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 12 }, { x: 4, y: 4 }, { x: 5, y: 6 }, { x: 6, y: 2 } ]
};

var MultiSeriesLineChart = React.createClass({

    getDefaultProps: function() {
        return {
            width: 400,
            height: 150
        }
    },

    render: function() {
        var data = _temperatures; //this.props.temperatures,
        var size = { width: this.props.width, height: this.props.height };

        var max = _.chain(data.sensor1, data.sensor2)
            .zip()
            .map(function(values) {
                return _.reduce(values, function(memo, value) { return Math.max(memo, value.y); }, 0);
            })
            .max()
            .value();

        var xScale = d3.scale.linear()
            .domain([0, 6])
            .range([0, this.props.width]);

        var yScale = d3.scale.linear()
            .domain([0, max])
            .range([this.props.height, 0]);

        return (
            <div className="MultiSeriesLineChart">
                <ChartBody width={this.props.width} height={this.props.height}>
                    <DataSeries data={_temperatures.sensor1} size={size} xScale={xScale} yScale={yScale} ref="sensor1" color="red" />
                    <DataSeries data={_temperatures.sensor2} size={size} xScale={xScale} yScale={yScale} ref="sensor2" color="orange" />
                </ChartBody>
            </div>
        );
    }
});

module.exports = MultiSeriesLineChart;