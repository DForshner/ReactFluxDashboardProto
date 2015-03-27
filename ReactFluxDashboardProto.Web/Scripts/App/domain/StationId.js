// A station Id

"use strict";

// Public
module.exports = StationId;

function StationId(stationId) {
    console.assert(typeof stationId === "string");

    this.StationId = stationId;
}

