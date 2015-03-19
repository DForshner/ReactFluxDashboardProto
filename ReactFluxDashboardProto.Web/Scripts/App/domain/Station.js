// A station

"use strict";

// Private
var _stationCount = 0;

function _increaseCount() {
    _stationCount++;
}

// Public
module.exports = Station;

function Station(lineId, stationId) {
    console.assert(typeof lineId === "string");
    console.assert(typeof stationId === "string");

    this.LineId = lineId;
    this.StationId = stationId;

    _increaseCount();
}

// Not the greatest hashcode
Station.prototype.getHashCode = function() { return "Station#" + this.LineId + this.StationId; };
