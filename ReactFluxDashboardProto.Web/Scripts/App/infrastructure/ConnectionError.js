// A domain error

"use strict";

// Public
module.exports = ConnectionError;

// Constructor
function ConnectionError(message) {
    this.name = "ConnectionError";
    this.message = message || "Unknown connection error occurred.";
}

// Inherit from the Error constructor
ConnectionError.prototype = Object.create(Error.prototype);
ConnectionError.prototype.constructor = ConnectionError;

ConnectionError.createFromResponse = function(response) {
    return new ConnectionError(response.statusText);
};