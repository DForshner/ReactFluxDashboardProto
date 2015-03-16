// Configure the dashboard.

"use strict";

var React = require("React");

var Model = {
    Line1MinRate: 10,
    Line1MaxRate: 100,
    Line1Description: "",
    Line1AlarmType: "",

    Line2MinRate: 10,
    Line2MaxRate: 100,
    Line2Description: "",
    Line2AlarmType: ""
};

var ConfigurationForm = React.createClass({

    getInitialState: function() {
        return Model;
    },

    handleInputChange: function(event) {
        var target = event.target.id;
        var value = event.target.value;
        console.log("Input changed ", target, ": ", value);
        var state = {};
        state[target] = value;
        this.setState(state);
    },

    handleTextAreaChange: function(event) {
        console.log("Textarea changed ", event.target.value);
        this.setState({textAreaValue: event.target.value});
    },

    handleSelectChange: function(event) {
        console.log("Select changed ", event.target.value);
        this.setState({selectValue: event.target.value});
    },

    renderField: function(id, label, field) {
        return (
            <div className="form-group">
                <label htmlFor={id} className="col-md-4 control-label">{label}</label>
                <div className="col-md-6">
                    {field}
                </div>
            </div>
        );
    },

    renderTextInput: function(id, label) {
        var value = this.state[id];
        return this.renderField(id, label,
            <input type="text" className="form-control" id={id} value ={value} ref={id} onChange={this.handleInputChange} />
        );
    },

    renderSelect: function(id, label) {

    },

    render: function() {
        return (
            <div className="ConfigurationForm form-horizontal">
                {this.renderTextInput('Line1MinRate', 'Line 1 Min. Rate')}
                {this.renderTextInput('Line1MaxRate', 'Line 1 Max. Rate')}

                {this.renderTextInput('Line2MinRate', 'Line 2 Min. Rate')}
                {this.renderTextInput('Line2MaxRate', 'Line 2 Max. Rate')}

                <input type="text" className="form-control" value={this.state.inputValue} onChange={this.handleInputChange} />
                <textarea name="description" className="form-control" value={this.state.textAreaValue} onChange={this.handleTextAreaChange} />
                <select className="form-control" value={this.state.selectValue} onChange={this.handleSelectChange}>
                    <option value="A">Apple</option>
                    <option value="B">Banana</option>
                    <option value="C">Cranberry</option>
                </select>
            </div>
        );
    }
});

module.exports = ConfigurationForm;