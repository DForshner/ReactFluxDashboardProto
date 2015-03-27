// Global object that contains error logic

"use strict";

// ------------------------------------------ Dependencies

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
var GlobalErrorStore = assign({}, EventEmitter.prototype, {

    // ------------------------------------------ Accessor methods

    hasErrors: function() { return _errors.length > 0; },

    getErrors: function() { return _errors; },

    // ------------------------------------------ Event methods

    emitChange: function() {
        console.log("Emit changed event");
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
GlobalErrorStore.dispatchToken = AppDispatcher.register(function(event) {
    var action = event.action;
    console.log("Action: ", action, " Payload: ", event.payload);

    switch( action ) {

        case ErrorConstants.ActionTypes.ADD:
            var error = event.payload;
            console.assert(error instanceof Error);
            _errors.push(error);
            GlobalErrorStore.emitChange();
            break;

        case ErrorConstants.ActionTypes.CLEAR:
            _clearErrors();
            GlobalErrorStore.emitChange();
            break;

        case void 0:
            console.log("Undefined action: check that ActionTypes constants are correct");
            break;

        default:
            // do nothing
    }

    return true;
});

module.exports = GlobalErrorStore;