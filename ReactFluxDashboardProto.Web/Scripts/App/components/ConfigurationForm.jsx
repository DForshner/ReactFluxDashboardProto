// Configure the dashboard.

"use strict";

var React = require("React/addons");
var FactoryStore = require("../stores/FactoryStore");
var ConfigurationActionCreators = require('../actions/ConfigurationActionCreators');

var ConfigurationForm = React.createClass({

    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function() {
        return this._getConfiguration();
    },

    componentDidMount: function() {
        FactoryStore.bind(this._configurationChanged);
        ConfigurationActionCreators.load();
    },

    componentWillUnmount: function() {
        FactoryStore.unbind(this._configurationChanged);
    },

    _configurationChanged: function() {
        this.setState(this._getConfiguration());
    },

    _getConfiguration: function() {
         var config = FactoryStore.getConfiguration();
        config.Errors = {};
        return config;
    },

    _isValid: function() {
        var errors = {};

        if (this.state.Line1MinRate < 10 || this.state.Line1MinRate > 100) {
            errors["Line1MinRate"] = "Out of range [0-100].";
        }

        if (this.state.Line1MaxRate < 10 || this.state.Line1MaxRate > 100) {
            errors["Line1MaxRate"] = "Out of range [0-100].";
        }

        if (this.state.Line2MinRate < 10 || this.state.Line2MinRate > 200) {
            errors["Line2MinRate"] = "Out of range [0-200].";
        }

        if (this.state.Line2MaxRate < 10 || this.state.Line2MaxRate > 200) {
            errors["Line2MaxRate"] = "Out of range [0=200].";
        }

        this.setState({Errors: errors});

        // Return false if errors
        for (var error in errors) {
            return false;
        }
        return true;
    },

    _handleSubmitButtonClick: function(event) {
        event.preventDefault();
        if (this._isValid()) {
            ConfigurationActionCreators.update(this.state);
        } else {
            // Re-render to show errors
            this.forceUpdate();
        }
    },

    _renderField: function(propName, label, field) {
        // Render errors
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
        return (
            <div className="ConfigurationForm">
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