// Header for line table
// Note: Stateless renderer component - Only contains logic to render DOM elements.

"use strict";

var React = require("react");

var LineTableHeader = React.createClass({

    render: function() {
        return (
            <thead className="LineTableHeader">
                <tr>
                    <th>Name</th>
                    <th>Total</th>
                    <th>Defects</th>
                    <th>Defect Rate</th>
                </tr>
            </thead>
        );
    }

});

module.exports = LineTableHeader;