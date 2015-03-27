// A slice of a pie chart

"use strict";

module.exports = PieChartSlice;

function PieChartSlice(label, count) {
    console.assert(label);
    console.assert(count || count === 0);

    this.Label = label;
    this.Count = count;
}