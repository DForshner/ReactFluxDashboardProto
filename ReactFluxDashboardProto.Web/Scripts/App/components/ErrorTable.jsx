// Overview of all production lines

// Note: Stateful component - 3 kinds of states: initial state, user input state, and data store state.
// Entry points into the "widget" that you're assembling. No single application-wide entry point anymore
// for downstream dependency or data injection, because all of these widgets have their own isolated lifecycles.
// That's why they themselves need to access & listen to stores.
// Othere than initiale behavorial properties, stateful components do not receive actual data via upstream properties.
// Stateful components do not normally render html DOM elements themselves directly instead they manage state and
// pass it to their children to render through downstream properties.

"use strict";

var React = require("React/addons");

var ErrorActionCreators = require('../actions/ErrorActionCreators');
var ErrorRow = require("./ErrorRow.jsx");

var ErrorTable = React.createClass({

    propTypes: {
        errors: React.PropTypes.array.isRequired
    },

    _handleClearButtonClick: function() {
        ErrorActionCreators.clear();
    },

    render: function() {
        var rows = this.props.errors.map(function(error, i) {
            return (
                <ErrorRow error={error} key={i} />
            );
        });
        return (
            <div className="ErrorTable panel panel-default">
                <div className="panel-body">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Messages</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>
                <div className="panel-footer">
                    <button type="button" className="btn btn-primary btn-block" onClick={this._handleClearButtonClick}>Clear</button>
                </div>
            </div>
        );
    }

});

module.exports = ErrorTable;