// Comment describing what this component is.

"use strict";

// Private state.  Keep your render method pure - Do not use instance fields in render method.
var _secret = "Secret";

// Public
var StandardComponentDesign = React.createClass({

    // Validate each prop the component will receive.  Document what component needs.
    propTypes: {
        // Required
        arrayProp: React.PropTypes.array.isRequired,
        boolProp: React.PropTypes.bool.isRequired,
        funcProp: React.PropTypes.func.isRequired,
        elementProp: React.PropTypes.element.isRequired,

        // Optional
        numProp: React.PropTypes.number,
        objProp: React.PropTypes.object,
        stringProp: React.PropTypes.string
    },

    // External behaviors the component is using/dependant on.  Chunks of re-usable functionality.
    mixins: [],

    // Life-cycle events that occur before an instance of the component is created.
    getInitialState: function() {},
    getDefaultProps: function() {
        // Every optional prop should have a default
        return {
            numProp: 1,
            objProp: {},
            stringProp: ""
        };
    },

    // Life-cycle events that occur during the mounting/updating/mounted cycle.
    componentWillMount: function() {},
    componentWillRecieveProps: function() {},
    componentWillUnmount: function() {},

    _parseData: function() {},

    // Element event handlers
    _handleButtonClicked: function (event) {
        // Always call component method to handle events.
        // Don't call ActionCreators in render method.
        SomeActionCreator.someAction(_secret);
    },

    // Render helpers
    _renderWidget() {},

    // Render() is cheap!  Most of the work should happen in the render method.
    // Prefer recalculating based on this.prop each change instead of dealing with state (setState).
    render: function() {

        {/* Always constrain elements between parenthesis (). */ }

        {/* Perform conditional (on state/props) or complex rendering logic outside of return statement */}
        var optionalElement;
        if (this.props.condition) {
           optionalElement = (<div> ... </div>);
        }

        {/* Use multi-line return statement when more than one element being returned. */}
        return (
            <div>
                {this._renderWidget()}

                {optionalElement}

                {/* Iterate over lists of data in-line if simple */}
                {this.props.list.map(function(data, i) {
                    return (<Component1 data={data} key={i} />)
                })}

                { /* If there are 3 or more properties being passed to child element display them on multiple indented lines */ }
                <Component2
                    foo={this.props.foo}
                    bar={this.props.bar}
                />

            </div>
        );
    }
});

/* export = StandardComponentDesign */