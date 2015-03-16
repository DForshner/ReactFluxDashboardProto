// Details about a station.

"use strict";

var React = require("React");
var Router = require('react-router');
var DefectTypePieChart = require("./DefectTypePieChart.jsx");

var StationDetails = React.createClass({
    mixins: [ Router.State ],

    loadLinesFromServer: function() {
        var data = [
            { Type: "Defect A", Count: 50 },
            { Type: "Defect B", Count: 100 },
            { Type: "Defect C", Count: 200 }
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
        var id = this.getParams();
        console.log("data ", this.state.data);

        return (
            <div className="StationDetails">
                <h4>Station {id} Details</h4>
                <DefectTypePieChart
                    data={this.state.data}
                />
            </div>
        );
    }
});

module.exports = StationDetails;