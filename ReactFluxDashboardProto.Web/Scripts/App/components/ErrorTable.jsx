// Overview of all production lines

// Note: Stateful component - 3 kinds of states: initial state, user input state, and data store state.
// Entry points into the "widget" that you're assembling. No single application-wide entry point anymore
// for downstream dependency or data injection, because all of these widgets have their own isolated lifecycles.
// That's why they themselves need to access & listen to stores.
// Othere than initiale behavorial properties, stateful components do not receive actual data via upstream properties.
// Stateful components do not normally render html DOM elements themselves directly instead they manage state and
// pass it to their children to render through downstream properties.

"use strict";

// ------------------------------------------ Dependencies

var React = require("React/addons");

var ErrorActionCreators = require('../actions/ErrorActionCreators');
var ErrorRow = require("./ErrorRow.jsx");

var ErrorStore = require("../stores/ErrorStore");

var ErrorTable = React.createClass({

    componentDidMount: function() {
        ErrorStore.bind(this._errorsOccured);
    },

    componentWillUnmount: function() {
        ErrorStore.unbind(this._errorsOccured);
    },

    _errorsOccured: function() {
        this.forceUpdate();
    },

    _handleClearButtonClick: function() {
        ErrorActionCreators.clear();
    },

    render: function() {
        if (!ErrorStore.hasErrors()) {
            return (<div className="ErrorTable"></div>);
        }
        var errors = ErrorStore.getErrors();
        var rows = errors.map(function(error, i) {
            console.log(typeof error);
            return (
                <ErrorRow error={error} key={i} />
            );
        });
        return (
            <div className="ErrorTable panel">
                <div className="panel-body">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Errors</th>
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