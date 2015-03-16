// Overview of all production lines

"use strict";

var React = require("React");
var LineTableHeader = require("./LineTableHeader.jsx");
var LineTableBody = require("./LineTableBody.jsx");

var LineTable = React.createClass({

    loadLinesFromServer: function() {
        var data = [
            { Id: "A", Name: "Line A", Total:50 },
            { Id: "B", Name: "Line B", Total:100 }
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
        return (
            <div className="LineTable">
                <h4>Factory Overview</h4>
                <table className="table table-hover">
                    <LineTableHeader />
                    <LineTableBody data={this.state.data} />
                </table>
            </div>
        );
    }
});

module.exports = LineTable;