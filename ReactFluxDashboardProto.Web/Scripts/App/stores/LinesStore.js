// Store for production lines

"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var LineConstants = require('../constants/LineConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var
    _lines = [],
    _errors = [];

var LinesStore = assign({}, EventEmitter.prototype, {

    init: function(payload) {
        console.log("Payload: ", payload);
    },

    getAllLines: function() {
        return _lines;
    },

    getErrors: function(){
        return _errors;
    },

    emitChange: function() {
        this.emit( CHANGE_EVENT );
    },

    addChangeListener: function( callback ) {
        this.on( CHANGE_EVENT, callback );
    },

    removeChangeListener: function( callback ) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function( payload ) {
    var action = payload.action;

    switch( action.type ) {

        case LineConstants.ActionTypes.RECEIVE_LINES:
            LinesStore.init( action.rawNodes );
            LinesStore.emitChange();
            break;

        default:
            console.log("Unhandled registration type");
    }
});

module.exports = LinesStore;