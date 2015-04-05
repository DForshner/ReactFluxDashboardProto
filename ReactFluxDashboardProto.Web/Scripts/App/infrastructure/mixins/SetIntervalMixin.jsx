/**
 * Mixin that calls component methods on a periodic timer
 *
 * Usage:
 * componentDidMount: function() {
 *      this.setInterval(this.doFooEverySecond, 1000);
 * }
 * */
var SetIntervalMixin = {

    componentWillMount: function() {
        this.intervals = [];
    },

    setInterval: function(fn, ms) {
        this.intervals.push(setInterval(fn, ms));
    },

    componentWillUnmount: function() {
        this.intervals.forEach(clearInterval);
    }
};

module.exports = SetIntervalMixin;