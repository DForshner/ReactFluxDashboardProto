// Overview of all production lines

"use strict";

var React = require("react");
var SetIntervalMixin = require('../infrastructure/mixins/setIntervalMixin.jsx');
var FactoryStore = require("../stores/FactoryStore");
var LineActionCreators = require('../actions/LineActionCreators');
var LineTable = require("./FactoryOverview/LineTable.jsx");

var UPDATE_FREQUENCY = 2000; // 1 seconds

var FactoryOverview = React.createClass({

    mixins: [ SetIntervalMixin ],

    _linesChanged: function() {
        this.forceUpdate();
    },

    _updateState: function() {
        LineActionCreators.loadAll();
    },

    componentDidMount: function() {
        FactoryStore.bind(this._linesChanged);

        this._updateState();

        this.setInterval(this._updateState, UPDATE_FREQUENCY);
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