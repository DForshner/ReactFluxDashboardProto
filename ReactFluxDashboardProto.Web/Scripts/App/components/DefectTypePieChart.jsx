// Defect types shown in a pie chart.

"use strict";

var React = require("React/addons");
var d3 = require("d3");

var Chart = {
    width: 0,
    height: 0,
    radius: 0,

    createChart: function(el, props, state) {
        this.width = props.width,
        this.height = props.height;
        this.radius = Math.min(this.width, this.height) / 2;

        this.updateChart(el, state);
    },

    updateChart: function(el, state) {
        var data = state.data;

        data.forEach(function(d) {
            d.Count = +d.Count;
        });

        var pie = d3.layout.pie()
            .sort(null)
            .value(function(d) { return d.Count; });

        // Remove previous chart if on exists
        this.destroyChart(el);

        var svg = d3.select(el).append("svg")
            .attr("width", this.width)
            .attr("height", this.height)
            .append("g")
            .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");

        var g = svg.selectAll(".arc")
            .data(pie(data))
            .enter().append("g")
            .attr("class", "arc");

        var color = d3.scale.ordinal()
            .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

        var arc = d3.svg.arc()
            .outerRadius(this.radius - 10)
            .innerRadius(0);

        g.append("path")
            .attr("d", arc)
            .style("fill", function(d) { return color(d.data.Type); });

        g.append("text")
            .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
            .attr("dy", ".35em")
            .style("text-anchor", "middle")
            .text(function(d) { return d.data.Type; });
    },

    destroyChart: function (el) {
        d3.select(el).select("svg").remove();
    }
};

var DefectTypePieChart = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired
    },

    componentDidMount: function() {
        var el = this.getDOMNode();
        var props = {
            width: '200',
            height: '200'
        };
        var data = this._getChartState();
        Chart.createChart(el, props, data);
    },

    componentDidUpdate: function() {
        var el = this.getDOMNode();
        Chart.updateChart(el, this._getChartState());
    },

    _getChartState: function() {
        return {
            data: this.props.data
        };
    },

    render: function() {
        return (
            <div className="DefectTypePieChart"/>
        );
    },

    componentWillUnmount: function() {
        var el = this.getDOMNode();
        Chart.destroyChart(el);
    }
});

module.exports = DefectTypePieChart;