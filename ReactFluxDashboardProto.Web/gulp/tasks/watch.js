/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
*/
var gulp = require('gulp');

gulp.task('watch', ['setWatch', 'build'], function (callback) {

    // Watchify will watch and recompile our JS, so no need to gulp.watch it
    gulp.watch("./Scripts/Vendor/**/*.js", ['jshint']);

});