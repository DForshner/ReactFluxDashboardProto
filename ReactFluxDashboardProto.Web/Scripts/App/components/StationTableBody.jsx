// List of all production lines

"use strict";

var React = require("React");
var StationRow = require("./StationRow.jsx");

var StationTableBody = React.createClass({
    render: function() {
        var rows = this.props.data.map(function(line, index) {
            return (
                <StationRow id={line.Id} name={line.Name} total={line.Total} key={index}/>
            );
        });
        return (
            <tbody className="StationTableBody">
                {rows}
            </tbody>
        );
    }
});

module.exports = StationTableBody;