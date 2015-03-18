// A station

"use strict";

// Private
var stationCount = 0;

function increaseCount() {
    stationCount++;
}

// Public
module.exports = Station;

// Constructor
function Station(lineId, stationId) {
    console.assert(typeof lineId === "string");
    console.assert(typeof stationId === "string");

    this.LineId = lineId;
    this.StationId = stationId;

    increaseCount();
}

// Not the greatest hashcode
Station.prototype.getHashCode = function() { return "Station#" + this.LineId + this.StationId; };
