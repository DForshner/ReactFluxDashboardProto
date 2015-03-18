// Overview of all production lines

"use strict";

var React = require("React/addons");
var FactoryStore = require("../stores/FactoryStore");
var LineActionCreators = require('../actions/LineActionCreators');
var LineTableHeader = require("./LineTableHeader.jsx");
var LineTableBody = require("./LineTableBody.jsx");

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
        var lines = FactoryStore.getAllLines();
        return (
            <div className="LineTable">
                <h4>Factory Overview</h4>
                <table className="table table-hover">
                    <LineTableHeader />
                    <LineTableBody lines={lines} />
                </table>
            </div>
        );
    }
});

module.exports = LineTable;