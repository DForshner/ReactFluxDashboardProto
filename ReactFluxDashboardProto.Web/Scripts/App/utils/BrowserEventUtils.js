// Mouse location utilities

"use strict";

function displayCoords(event) {
    //console.log("Mouse at " + event.pageX + ", " + event.pageY);
}

var UPDATE_FREQUENCY_MS = 500;
var scheduled = false;
var lastEvent;

document.addEventListener("mousemove", function(event) {
    lastEvent = event;
    if (!scheduled) {
        scheduled = true;
        setTimeout(function() {
            scheduled = false;
            displayCoords(lastEvent);
        }, UPDATE_FREQUENCY_MS);
    }
});

var BrowserEventUtils = {

};

module.exports = BrowserEventUtils;