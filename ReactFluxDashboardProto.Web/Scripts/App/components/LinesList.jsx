// List of all production lines

"use strict";

var React = require("React");
var Line = require("./Line.jsx");

var LinesList = React.createClass({
    render: function() {
        var lineNodes = this.props.data.map(function(line, index) {
            return (
                <Line name={line.Name} key={index}></Line>
            );
        });

        return (
            <div className="LinesList">
                {lineNodes}
            </div>
        );
    }
});

module.exports = LinesList;