"use strict";

var React = require("react");
var Line = require("./Line.jsx");

var DataSeries = React.createClass({

    getDefaultProps: function() {
        return {
            title: '',
            data: [],
            interpolate: 'linear'
        }
    },

    render: function() {
        var self = this,
            props = this.props,
            yScale = props.yScale,
            xScale = props.xScale;

        var path = d3.svg.line()
            .x(function(d) { return xScale(d.x); })
            .y(function(d) { return yScale(d.y); })
            .interpolate(this.props.interpolate);

        return (
            <Line path={path(this.props.data)} color={this.props.color} />
        )
    }

});

module.exports = DataSeries;