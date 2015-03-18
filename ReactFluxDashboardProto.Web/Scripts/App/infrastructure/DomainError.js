// A domain (business logic) error

"use strict";

// Public
module.exports = DomainError;

// Constructor
function DomainError(message) {
    this.name = "DomainError";
    this.message = message || "An unknown domain error occurred.";
}

// Inherit from the Error constructor
DomainError.prototype = Object.create(Error.prototype);
DomainError.prototype.constructor = DomainError;