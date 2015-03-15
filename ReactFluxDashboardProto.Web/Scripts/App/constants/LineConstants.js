var keyMirror = require('keymirror');

var APIRoot = "http://localhost:35992/";

module.exports = {

  APIEndpoints: {
    SERIES:        APIRoot + "api/lines"
  },

  ActionTypes: keyMirror({
      RECEIVE_LINES: null
  })
};
