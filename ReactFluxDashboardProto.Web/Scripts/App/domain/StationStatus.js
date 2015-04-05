//

"use strict";

module.exports = StationStatus;

function StationStatus() {
    this.StationId = "";
    this.Name = "";
    this.Total = 0;
    this.Retries = 0;
    this.ScanErrors = 0;
}

// Not the greatest hashcode
StationStatus.prototype.getHashCode = function() { return "Station#" + this.StationId; };
