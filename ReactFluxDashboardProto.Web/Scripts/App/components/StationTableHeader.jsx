// Header for line table

"use strict";

var React = require("React");

var StationTableHeader = React.createClass({
    render: function() {
        return (
            <thead className="StationTableHeader">
                <tr>
                    <th>Name</th>
                    <th>Total</th>
                </tr>
            </thead>
        );
    }
});

module.exports = StationTableHeader;