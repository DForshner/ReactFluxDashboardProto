// Comment describing what this component is.

// Parent/Child components.
// Is this a stateful top level component that organizes child components? State should live on top.
// Is this a child element containing DOM rendering details?

// Best practices for data flows are:
// From parent to child: via props
// From child to parent: via handlers
// From unrelated component to another: via message bus
// A component cannot mutate its props — they are always consistent with what its parent has set them to.

"use strict";

// Private state.  Keep your render method pure - Do not use instance fields in render method.
var _secret = "Secret";

// Public
var StandardComponentDesign = React.createClass({

    // Validate each prop the component will receive.  Document what component needs/expects.
    propTypes: {
        // Required
        arrayProp: React.PropTypes.array.isRequired,
        boolProp: React.PropTypes.bool.isRequired,
        funcProp: React.PropTypes.func.isRequired,
        elementProp: React.PropTypes.element.isRequired,

        // Optional
        arrayOfProp: React.PropTypes.arrayOf(React.PropTypes.number),
        objectOfProp: React.PropTypes.objectOf(React.PropTypes.number),
        enumProp: React.PropTypes.oneOf(['News', 'Photos']),
        numProp: React.PropTypes.number,
        objProp: React.PropTypes.object,
        stringProp: React.PropTypes.string,

        // object of a particular shape
        object2: React.PropTypes.shape({
            color: React.PropTypes.string,
            fontSize: React.PropTypes.number
        }),

        // custom validator
        customProp: function(props, propName, componentName) {
            if (!/matchme/.test(props[propName])) {
                return new Error('Validation failed!');
            }
        }
    },

    // External behaviors the component is using/dependant on.  Chunks of re-usable functionality.
    mixins: [],

    // Life-cycle events that occur before an instance of the component is created.
    getInitialState: function() {
        // Using props, passed down from parent, to set state here is considered an anti-pattern except for initial values.
        // State should exist in only one location in the component hierarchy (preferable the parent).
    },
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

    // Element event handlers.
    // Name handlers after the event that causes them to be triggered.
    // Start with _handle, be in present tense, and end with event they handle.
    _handleFooButtonClicked: function (event) {
        // Always call component method to handle events.
        // Don't call ActionCreators in render method.
        SomeActionCreator.someAction(_secret);
    },

    // Get methods (computed props)
    _getFoo: function() {},

    // Compound state (returns bool)
    _hasFleas: function() {},
    _canRun: function() {},
    _isImportant: function() {},

    // Render helpers - Isolate logical chunks of component UI.
    _renderWidget() {},

    // Render() is cheap!  Most of the work should happen in the render method.
    // Prefer recalculating based on this.prop each change instead of dealing with state (setState).
    // Note: Last method so it's easy to find.
    render: function() {

        {/* Always constrain elements between parenthesis (). */ }

        {/* Perform conditional (on state/props) or complex rendering logic outside of return statement */}
        var optionalElement;
        if (this.props.condition) {
           optionalElement = (<div> ... </div>);
        }

        // Use classSet when there are conditional class types
        var cx = React.addons.classSet;
        var classes = cx({
            'message': true,
            'message-important': this.props.isImportant,
            'message-read': this.props.isRead
        });

        {/* Use multi-line return statement when more than one element being returned. */}
        return (
            <div>
                {this._renderWidget()}

                {/* If undefined/null this will be ignored during rendering */}
                {optionalElement}

                {/* Lists of items/elements? */}
                {/* React needs a unique value assigned to the key prop so its diffing algorithm can determine which children to add,remove/keep/update */}
                {/* Remember that the key only has to be unique among its siblings, not globally unique. */}
                {/* If you don't provide stable keys (by using Math.random() for example), all the sub-trees are going to be re-rendered every single time. */}
                {this.props.list.map(function(data, i) {
                    {/* Iterate over lists of data in-line if simple */}
                    return (<Component1 data={data} key={i} />)
                })}

                { /* If there are 3 or more properties being passed to child element display them on multiple indented lines */ }
                <Component2
                    foo={this.props.foo}
                    bar={this.props.bar}
                />

                <div className={classes}>Great, I'll be there.</div>;

                <button type="button" className="btn btn-primary btn-block" onClick={this._handleFooButtonClick}>Foo</button>

                // Parent-child event listeners
                <button type="button" className="btn btn-primary btn-block" onClick={this.props.handleBarButtonClick}>Bar</button>

            </div>
        );
    }
});

/* export = StandardComponentDesign */