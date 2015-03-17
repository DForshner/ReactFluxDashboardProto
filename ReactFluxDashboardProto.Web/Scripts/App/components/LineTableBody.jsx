// List of all production lines

"use strict";

var React = require("React");
var LineRow = require("./LineRow.jsx");

var LineTableBody = React.createClass({
    render: function() {
        var lines = this.props.data;
        var rows = lines.map(function(line) {
            return (
                <LineRow id={line.Id} name={line.Name} total={line.Total}/>
            );
        });
        return (
            <tbody className="LineTableBody">
                {rows}
            </tbody>
        );
    }
});

module.exports = LineTableBody;