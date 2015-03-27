// Overview of all production lines

"use strict";

var React = require("react");
var LineTableHeader = require("./LineTableHeader.jsx");
var LineTableBody = require("./LineTableBody.jsx");

var LineTable = React.createClass({

    render: function() {
        return (
            <div className="LineTable">
                <h4>Factory Overview</h4>
                <table className="table table-hover">
                    <LineTableHeader />
                    <LineTableBody lineStatuses={this.props.lineStatuses} />
                </table>
            </div>
        );
    }

});

module.exports = LineTable;