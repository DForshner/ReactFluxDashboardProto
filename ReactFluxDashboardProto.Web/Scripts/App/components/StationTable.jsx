// Overview of all stations in a given line.

"use strict";

var React = require("React");
var Router = require('react-router');
var FactoryStore = require("../stores/FactoryStore");
var StationActionCreators = require('../actions/StationActionCreators');
var StationTableHeader = require("./StationTableHeader.jsx");
var StationTableBody = require("./StationTableBody.jsx");

var StationTable = React.createClass({
    mixins: [ Router.State ],

    stationsChanged: function() {
        this.forceUpdate();
    },

    componentDidMount: function() {
        FactoryStore.bind(this.stationsChanged);
        StationActionCreators.loadAll();
    },

    componentWillUnmount: function() {
        FactoryStore.unbind(this.stationsChanged);
    },

    render: function() {
        var stations = FactoryStore.getAllStations();
        var lineId = this.getParams();
        return (
            <div className="StationTable">
                <h4>Line {lineId} Stations</h4>
                <table className="table table-hover">
                    <StationTableHeader />
                    <StationTableBody data={stations} />
                </table>
            </div>
        );
    }
});

module.exports = StationTable;