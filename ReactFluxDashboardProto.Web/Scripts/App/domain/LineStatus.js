//

"use strict";

module.exports = LineStatus;

function LineStatus() {
    this.LineId = "";
    this.Name = "";
    this.Total = 0;
    this.Defects = 0;
}

LineStatus.prototype.getDefectRatio = function() {
    return (this.Total === 0) ? 0 : Math.round(this.Defects / this.Total * 100);
};

// Not the greatest hashcode
LineStatus.prototype.getHashCode = function() { return "Line#" + this.LineId; };