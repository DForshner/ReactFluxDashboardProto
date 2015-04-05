"use strict";

var React = require("react");

var ChartBody = React.createClass({

    render: function() {
        return (
            <svg width={this.props.width} height={this.props.height}>{this.props.children}</svg>
        );
    }

});

module.exports = ChartBody;
