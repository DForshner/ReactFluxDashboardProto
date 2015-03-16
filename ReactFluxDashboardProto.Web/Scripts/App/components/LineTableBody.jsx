// List of all production lines

"use strict";

var React = require("React");
var LineRow = require("./LineRow.jsx");

var LineTableBody = React.createClass({
    render: function() {
        var rows = this.props.data.map(function(line, index) {
            return (
                <LineRow id={line.Id} name={line.Name} total={line.Total} key={index}/>
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