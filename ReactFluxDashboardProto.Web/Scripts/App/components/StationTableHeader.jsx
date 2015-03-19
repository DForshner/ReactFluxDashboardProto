// Header for line table
// Note: Stateless renderer component - Only contains logic to render DOM elements.

"use strict";

var React = require("React/addons");

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