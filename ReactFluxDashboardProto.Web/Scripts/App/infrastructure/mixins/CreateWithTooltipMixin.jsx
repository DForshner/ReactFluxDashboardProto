/**
 * Mixin that creates an element wrapped in a tooltip overlay.
 *
 * Usage:
 *
 * render: function() {
 *      return (
 *          {this.createWithTooltip(this.props.foo, "Important fact about foo")}
 *      );
 * */

var React = require("react");
var OverlayTrigger = require('react-bootstrap').OverlayTrigger;
var Tooltip = require('react-bootstrap').Tooltip;

 var CreateWithTooltipMixin = {

    createWithTooltip: function(element, tooltipText, options) {
        options = options || {};
        options.placement = options.placement || "left";
        options.delayShow = options.delayShow || 500;
        options.delayHide = options.delayHide || 150;

        var tooltip = <Tooltip>{tooltipText}</Tooltip>;

        return (
             <OverlayTrigger placement={options.placement} overlay={tooltip} delayShow={options.delayShow} delayHide={options.delayHide}>
                <div>{element}</div>
            </OverlayTrigger>
        );
    }

};

module.exports = CreateWithTooltipMixin;