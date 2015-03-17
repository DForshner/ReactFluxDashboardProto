// Sends messages from views to stores.

"use strict";

var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var AppDispatcher = assign(new Dispatcher(), {

});

module.exports = AppDispatcher;