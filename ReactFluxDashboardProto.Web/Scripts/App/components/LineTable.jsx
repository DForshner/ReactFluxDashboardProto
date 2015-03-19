// Overview of all production lines

"use strict";

var React = require("React/addons");
var FactoryStore = require("../stores/FactoryStore");
var LineActionCreators = require('../actions/LineActionCreators');

var LineTableHeader = require("./LineTableHeader.jsx");
var LineTableBody = require("./LineTableBody.jsx");

var ErrorTable = require("./ErrorTable.jsx");

var LineTable = React.createClass({

    _linesChanged: function() {
        this.forceUpdate();
    },

    componentDidMount: function() {
        FactoryStore.bind(this._linesChanged);
        LineActionCreators.loadAll();
    },

    componentWillUnmount: function() {
        FactoryStore.unbind(this._linesChanged);
    },

    render: function() {
        var errors;
        if (FactoryStore.hasErrors()) {
            errors = (
                <ErrorTable errors={FactoryStore.getErrors()} />
            );
        }

        var lineStatues = FactoryStore.getAllLines();
        return (
            <div className="LineTable">
                <h4>Factory Overview</h4>
                <table className="table table-hover">
                    <LineTableHeader />
                    <LineTableBody lineStatuses={lineStatues} />
                </table>

                {errors}
            </div>
        );
    }
});

module.exports = LineTable;