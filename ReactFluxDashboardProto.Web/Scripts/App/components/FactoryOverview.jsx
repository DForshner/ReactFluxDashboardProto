// Overview of all production lines

"use strict";

var React = require("react");
var FactoryStore = require("../stores/FactoryStore");
var LineActionCreators = require('../actions/LineActionCreators');
var LineTable = require("./FactoryOverview/LineTable.jsx");

var FactoryOverview = React.createClass({

    _linesChanged: function() {
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
        var lineStatuses = FactoryStore.getAllLines();
        return (
            <div className="FactoryOverview">
                <LineTable lineStatuses={lineStatuses} />
            </div>
        );
    }

});

module.exports = FactoryOverview;