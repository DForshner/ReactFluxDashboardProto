//
// Note: Stateless renderer component - Only contains logic to render DOM elements.

"use strict";

var React = require("react");

var ErrorRow = React.createClass({

    propTypes: {
        error: React.PropTypes.instanceOf(Error).isRequired
    },

    render: function() {
        return (
            <tr>
                <div className="ErrorRow">
                    <td>{this.props.error.message}</td>
                </div>
            </tr>
        );
    }
});

module.exports = ErrorRow;