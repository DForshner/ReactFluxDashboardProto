// A station

"use strict";

// Public
module.exports = Line;

function Line(lineId) {
    console.assert(typeof lineId === "string");

    this.LineId = lineId;
}

// Not the greatest hashcode
Line.prototype.getHashCode = function() { return "Line#" + this.LineId; };