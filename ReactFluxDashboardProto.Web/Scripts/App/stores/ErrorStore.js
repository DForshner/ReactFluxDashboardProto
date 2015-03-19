// Global object that contains error logic

"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ErrorConstants = require('../constants/ErrorConstants');

// Private

/** @const */
var CHANGED_EVENT = "ERRORSTORE_CHANGED";

var _errors = [];

function _clearErrors() {
    _errors.length = 0;
}

// Public
var ErrorStore = assign({}, EventEmitter.prototype, {

    // ------------------------------------------ Accessor methods

    hasErrors: function() { return _errors.length > 0; },

    getErrors: function() { return _errors; },

    // ------------------------------------------ Event methods

    emitChange: function() {
        console.log("Errors: ", _errors);
        this.emit(CHANGED_EVENT);
    },

    bind: function(callback) {
        console.assert(typeof callback === 'function');
        this.on(CHANGED_EVENT, callback);
    },

    unbind: function(callback) {
        console.assert(typeof callback === 'function');
        this.removeListener(CHANGED_EVENT, callback);
    }
});

// Configure store to respond to events dispatched by views.
AppDispatcher.register(function(event) {
    var action = event.action;

    if (typeof action === "undefined") {
        console.log("Undefined action: check constant ActionTypes");
    } else {
        console.log("Action: ", action, " Payload: ", event.payload);
    }

    switch( action ) {
        case ErrorConstants.ActionTypes.CLEAR:
            _clearErrors();
            ErrorStore.emitChange();
            break;
    }

    return true;
});

module.exports = ErrorStore;