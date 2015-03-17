// Overview of all production lines

"use strict";

var React = require("React");
var FactoryStore = require("../stores/FactoryStore");
var LineActionCreators = require('../actions/LineActionCreators');
var LineTableHeader = require("./LineTableHeader.jsx");
var LineTableBody = require("./LineTableBody.jsx");

var LineTable = React.createClass({

    linesChanged: function() {
        this.forceUpdate();
    },

    componentDidMount: function() {
        FactoryStore.bind(this.linesChanged);
        LineActionCreators.loadAll();
    },

    componentWillUnmount: function() {
        FactoryStore.unbind(this.linesChanged);
    },

    render: function() {
        var lines = FactoryStore.getAllLines();
        return (
            <div className="LineTable">
                <h4>Factory Overview</h4>
                <table className="table table-hover">
                    <LineTableHeader />
                    <LineTableBody data={lines} />
                </table>
            </div>
        );
    }
});

module.exports = LineTable;