// A heat Map event.

"use strict";

var _ = require("lodash");

module.exports = HeatMapEvent;

function HeatMapEvent(eventId, timestamp) {
    console.assert(eventId);
    console.assert(_.isNumber(timestamp));

    this.EventId = eventId;
    this.Timestamp = timestamp;
};