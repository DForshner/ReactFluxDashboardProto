// A validation error has occurred on data entered.

// Public
module.exports = FormValidationError;

// Constructor
function FormValidationError(message) {
    this.name = "FormValidationError";
    this.message = message || "A form domain error occurred.";
}

// Inherit from the Error constructor
FormValidationError.prototype = Object.create(Error.prototype);
FormValidationError.prototype.constructor = FormValidationError;