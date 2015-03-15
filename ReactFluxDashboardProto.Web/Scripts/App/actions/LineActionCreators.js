var AppDispatcher = require('../dispatcher/AppDispatcher');
var LineConstants = require('../constants/LineConstants');
var LineWebApiUtils = require('../webapiutils/LineWebApiUtils');

var LineActions = {

  receiveAll: function(payload) {
    AppDispatcher.handleServerAction({
      type: LineConstants.ActionTypes.RECEIVE_LINES,
      payload: payload
    });
  },

  loadAll: function(){
    LineWebApiUtils.getAllLines(LineActions.receiveAll);
  }

};

module.exports = LineActions;