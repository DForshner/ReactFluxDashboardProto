// Overview of all stations in a given line.

"use strict";

var React = require("React");
var Router = require('react-router');
var StationTableHeader = require("./StationTableHeader.jsx");
var StationTableBody = require("./StationTableBody.jsx");

var StationTable = React.createClass({
    mixins: [ Router.State ],

    loadLinesFromServer: function() {
        var data = [
            { Id: "A", Name: "Station A", Total:50 },
            { Id: "B", Name: "Station B", Total:100 }
        ];
        this.setState({data: data});
    },

    getInitialState: function() {
        return { data: [] };
    },

    componentDidMount: function() {
        this.loadLinesFromServer();
    },

    render: function() {
        var lineId = this.getParams();
        return (
            <div className="StationTable">
                <h4>Line {lineId} Stations</h4>
                <table className="table table-hover">
                    <StationTableHeader />
                    <StationTableBody data={this.state.data} />
                </table>
            </div>
        );
    }
});

module.exports = StationTable;