// Details of a single production line.

"use strict";

var React = require("React");

var Line = React.createClass({
    render: function() {
        return (
            <div className="comment">
                <h2> I'm a line. </h2>
            </div>
        );
    }
});

module.exports = Line;
