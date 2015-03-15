// Overview of all production lines

"use strict";

var React = require("React");
var LinesList = require("./LinesList.jsx");

var LinesDashboard = React.createClass({

    loadLinesFromServer: function() {
        var data = [
            { Name: "A" },
            { Name: "B" }
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
            <div className="LinesDashboard">
                <h1> Lines </h1>
                <LinesList data={this.state.data}/>
            </div>
        );

    }
});

module.exports = LinesDashboard;