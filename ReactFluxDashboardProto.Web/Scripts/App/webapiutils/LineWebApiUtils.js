var $ = require('jquery');

var LineWebApiUtils = {

  getAllLines: function( successCallback ) {
    $.get( "http://localhost:50053/api/lines")
      .done(function( data) {
        successCallback( data );
      });
  }
};

module.exports = LineWebApiUtils;