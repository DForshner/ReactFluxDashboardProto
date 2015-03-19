//

"use strict";

var _ = require('lodash');

module.exports = DashboardConfiguration;

function DashboardConfiguration() {
    this.Line1MinRate = 0;
    this.Line1MaxRate = 0;
    this.Line1Description = "";
    this.Line2MinRate = 0;
    this.Line2MaxRate = 0;
    this.Line2Description = "";
}

DashboardConfiguration.createFrom = function(formData) {

    delete formData.Errors;

    return _.extend(new DashboardConfiguration(), formData);
};

DashboardConfiguration.prototype.getErrors = function() {
    var errors = {};

    if (this.Line1MinRate < 10 || this.Line1MinRate > 100) {
        errors["Line1MinRate"] = "Out of range [10-100].";
    }

    if (this.Line1MaxRate < 10 || this.Line1MaxRate > 100) {
        errors["Line1MaxRate"] = "Out of range [10-100].";
    }

    if (this.Line2MinRate < 10 || this.Line2MinRate > 200) {
        errors["Line2MinRate"] = "Out of range [0-200].";
    }

    if (this.Line2MaxRate < 10 || this.Line2MaxRate > 200) {
        errors["Line2MaxRate"] = "Out of range [0-200].";
    }

    return errors;
};