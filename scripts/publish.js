process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

var gulp = require("gulp")
require("../config/gulpfile")
gulp.start('pub')