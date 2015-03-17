var AppDispatcher = require('../dispatcher/AppDispatcher');
var LineConstants = require('../constants/LineConstants');

var LineActions = {

  loadAll: function(){
    AppDispatcher.dispatch({
        action: LineConstants.ActionTypes.GET_ALL_LINES,
        payload: {}
    });
  }

};

module.exports = LineActions;