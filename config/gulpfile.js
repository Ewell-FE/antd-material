var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var path = require('path');
var paths = require('./paths');

// nodemon 的配置
var nodemonConfig = {
    script: paths.appMockJs,
    ext: 'js tmpl',
    ignore: [
        path.resolve(paths.appSrc, 'examples/**/index.js')
    ],
    watch: [paths.appMockJs, paths.appMock, path.resolve(paths.appSrc, 'examples')],
    env: {
        "NODE_ENV": "development"
    }
};

// 使用 nodemone 跑起服务器
gulp.task('serve', function () {
    return nodemon(nodemonConfig);
});

gulp.task('default', ['serve']);
