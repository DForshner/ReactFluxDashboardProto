// Configure the dashboard.
// Example of a stateful component which hold the state of the view until it's
// ready to update the application state by triggering an update action.
//
// Stateful components can have 3 kinds of states: initial state, user input state, and data store state.

"use strict";

var React = require("react/addons");
var ConfigurationStore = require("../stores/ConfigurationStore");
var ConfigurationActionCreators = require('../actions/ConfigurationActionCreators');
var DashboardConfiguration = require('../domain/DashboardConfiguration');
var _ = require('lodash');

var ConfigurationForm = React.createClass({

    mixins: [React.addons.LinkedStateMixin],

    componentDidMount: function() {
        ConfigurationStore.bind(this._configurationChanged);

        // Start fetching the data.  Store change event will occur when the data is ready.
        ConfigurationActionCreators.load();
    },

    componentWillUnmount: function() {
        ConfigurationStore.unbind(this._configurationChanged);
    },

    _configurationChanged: function() {
        var config = ConfigurationStore.getConfiguration();
        console.assert(config instanceof DashboardConfiguration);

        config.Errors = {};
        this.setState(config);
    },

    _handleSubmitButtonClick: function(event) {
        event.preventDefault();
        console.log("Submitting form");

        var config = DashboardConfiguration.createFrom(this.state);

        var errors = config.getErrors();
        this.setState({Errors: errors});

        if (_.isEmpty(errors)) {
            ConfigurationActionCreators.update(config);
        } else {
            // Re-render to show errors
            this.forceUpdate();
        }
    },

    _renderField: function(propName, label, field) {
        // Render field errors
        var formGroupClass = "form-group";
        var helpText;
        if (propName in this.state.Errors) {
            formGroupClass = "form-group has-error";
            helpText = (<span className='help-block'>{this.state.Errors[propName]}</span>);
        }

        return (
            <div className={formGroupClass}>
                <label className="control-label" propName={propName}>{label}</label>
                {field}
                {helpText}
            </div>
        );
    },

    _renderTextInput: function(propName, label) {
        var field = (<input type="text" className="form-control" valueLink={this.linkState(propName)} />);
        return (this._renderField(propName, label, field));
    },

    _renderTextArea: function(propName, label) {
        var field = (<textarea name={propName} className="form-control" valueLink={this.linkState(propName)} />);
        return (this._renderField(propName, label, field));
    },

    render: function() {
        if (this.state === null) {
            return (<div></div>);
        }

        return (
            <div className="ConfigurationForm panel panel-default">
                <form>
                    <div className="panel-body">
                        <div className="well well-lg">
                            {this._renderTextInput('Line1MinRate', 'Line 1 Max. Rate')}
                            {this._renderTextInput('Line1MaxRate', 'Line 1 Max. Rate')}
                            {this._renderTextArea('Line1Description', 'Line 1 Description')}
                        </div>

                        <div className="well well-lg">
                            {this._renderTextInput('Line2MinRate', 'Line 2 Min. Rate')}
                            {this._renderTextInput('Line2MaxRate', 'Line 2 Max. Rate')}
                            {this._renderTextArea('Line2Description', 'Line 2 Description')}
                        </div>
                    </div>
                    <div className="panel-footer">
                        <button type="button" className="btn btn-primary btn-block" onClick={this._handleSubmitButtonClick}>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = ConfigurationForm;