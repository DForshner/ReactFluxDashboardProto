// List of all production lines

"use strict";

var React = require("React/addons");
var LineRow = require("./LineRow.jsx");

var LineTableBody = React.createClass({

    propTypes: {
        lines: React.PropTypes.array.isRequired
    },

    render: function() {
        var lines = this.props.lines;
        var rows = lines.map(function(line, i) {
            return (
                <LineRow id={line.Id} name={line.Name} total={line.Total} key={i} />
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