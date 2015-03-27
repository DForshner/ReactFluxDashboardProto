// An alarm event.

"use strict";

var _ = require("lodash");

module.exports = AlarmEvent;

function AlarmEvent(eventId, timestamp) {
    console.assert(eventId);
    console.assert(_.isNumber(timestamp));

    this.EventId = eventId;
    this.Timestamp = timestamp;
};