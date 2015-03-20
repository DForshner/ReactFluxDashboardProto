// Overview of all production lines

"use strict";

var React = require("React/addons");
var FactoryStore = require("../stores/FactoryStore");
var LineActionCreators = require('../actions/LineActionCreators');

var LineTableHeader = require("./LineTableHeader.jsx");
var LineTableBody = require("./LineTableBody.jsx");

var LineTable = React.createClass({

    _linesChanged: function() {
        console.log("lines changed");
        this.forceUpdate();
    },

    componentDidMount: function() {
        FactoryStore.bind(this._linesChanged);

        // Start fetching the data.  Store change event will occur when the data is ready.
        LineActionCreators.loadAll();
    },

    componentWillUnmount: function() {
        FactoryStore.unbind(this._linesChanged);
    },

    render: function() {
        var lineStatues = FactoryStore.getAllLines();
        return (
            <div className="LineTable">
                <h4>Factory Overview</h4>
                <table className="table table-hover">
                    <LineTableHeader />
                    <LineTableBody lineStatuses={lineStatues} />
                </table>
            </div>
        );
    }
});

module.exports = LineTable;