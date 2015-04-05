// A linear heat-map of events vs. time.

"use strict";

var React = require("react");
var d3 = require("d3");
var HeatMapEvent = require("../../domain/HeatMapEvent");
var _ = require("lodash");

var _width = 0;
var _height = 0;
var _timeSliceHeight = 0;
var _timeSliceWidth = 0;
var _margin = {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
};
var _borderWidth = 1;
var _numBuckets = 24;

var HeatMap = {

    createChart: function(el, dim, events, start, end) {
        console.assert(start < end);

        _width = dim.width;
        _height = dim.height;
        _timeSliceHeight = (_height - _margin.top - _margin.bottom - 2 * _borderWidth);
        _timeSliceWidth = (_width - _margin.left - _margin.right - 2 * _borderWidth) / (_numBuckets + 1);

        this.updateChart(el, events, start, end);
    },

    updateChart: function(el, events, start, end) {
        console.assert(start < end);

        // Remove previous if exists
        this.destroyChart(el);

        // Create an array of buckets each representing one section of the time range.
        var buckets = [];
        for (var i = 0; i < _numBuckets + 1; i++) {
            buckets[i] = {
                sequence: i,
                events: []
            };
        }

        // Distribute events into their appropriate buckets.
        var timePerBucket = (end - start) / _numBuckets;
        console.assert(timePerBucket * _numBuckets + start === end);
        console.assert(end - timePerBucket * _numBuckets === start);

        events.forEach(function (e) {
            if (e.Timestamp < start || e.Timestamp > end) {
                throw Error("Event timestamp " + e.Timestamp.toString() + " out of range " + start.toString() + "-" + end.toString());
            }

            var bucketIndex = Math.floor((e.Timestamp - start) / timePerBucket);
            console.assert(bucketIndex < buckets.length);

            var bucket = buckets[bucketIndex];
            bucket.events.push(e);
        });

        var svg = d3.select(el).append("svg")
            .attr("class", "svg-container")
            .attr("width", _width)
            .attr("height", _height)

        var heatMap = svg.append("g")
            .attr("class", "heat-map")
            .attr("transform", "translate(" + _margin.left + "," + _margin.top + ")");

        var border = heatMap.append("rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", _width - _margin.left - _margin.right)
            .attr("height", _height - _margin.top - _margin.bottom)
            .style("stroke", "black")
            .style("fill", "none")
            .style("fill-opacity", 0)
            .style("stroke-width", _borderWidth);

        var timeSlicesGroup = heatMap.append("g")
            .attr("class", "time-slices")
            .attr("transform", "translate(" + _borderWidth + "," + _borderWidth + ")");

        var timeSliceBackround = timeSlicesGroup.append("rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("height", _timeSliceHeight)
            .attr("width", _timeSliceWidth * (_numBuckets + 1))
            .style("fill", "cyan");

        var timeSlices = timeSlicesGroup.selectAll("div")
            .data(buckets)
            .enter()
            .append("rect");

        var toolTip = d3.select(el)
            .append("div")
            .attr("class", "tooltip")
            .style("position", "absolute")
            .style("text-align", "center")
            .style("padding", "30px")
            .style("background", "white")
            .style("border", "0px")
            .style("border-radius", "8px")
            .style("opacity", 0);

        var timeSliceAttributes = timeSlices
            .attr("x", function (s) {
                return s.sequence * _timeSliceWidth;
            })
            .attr("y", 0)
            .attr("height", _timeSliceHeight)
            .attr("width", _timeSliceWidth)
            .style("fill", function (s) {
                return (s.events.length === 0) ? "cyan" : "red";
            })
    },

    destroyChart: function (el) {
        d3.select(el).select("svg").remove();
    }
};

var EventHeatMap = React.createClass({

    propTypes: {
        slices: React.PropTypes.oneOfType([
            React.PropTypes.arrayOf(Object), // Empty array
            React.PropTypes.arrayOf(HeatMapEvent)
        ]).isRequired,

        start: React.PropTypes.number.isRequired,
        end: React.PropTypes.number.isRequired,
    },

    getDefaultProps: function() {
        return { dimensions: { width: '140', height: '50' } };
    },

    componentDidMount: function() {
        var el = this.getDOMNode();
        HeatMap.createChart(el, this.props.dimensions, this.props.events, this.props.start, this.props.end);
    },

    componentDidUpdate: function() {
        var el = this.getDOMNode();
        HeatMap.updateChart(el, this.props.events, this.props.start, this.props.end);
    },

    componentWillUnmount: function() {
        var el = this.getDOMNode();
        HeatMap.destroyChart(el);
    },

    render: function() {
        return (
            <div className="EventHeatMap"/>
        );
    }
});

module.exports = EventHeatMap;