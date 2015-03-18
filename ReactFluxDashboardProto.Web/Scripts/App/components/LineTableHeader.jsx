// Header for line table

"use strict";

var React = require("React/addons");

var LineTableHeader = React.createClass({

    render: function() {
        return (
            <thead className="LineTableHeader">
                <tr>
                    <th>Name</th>
                    <th>Total</th>
                </tr>
            </thead>
        );
    }

});

module.exports = LineTableHeader;