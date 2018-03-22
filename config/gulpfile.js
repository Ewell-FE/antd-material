var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var paths = require('./paths');

// nodemon 的配置
var nodemonConfig = {
    script: paths.appMockJs,
    ext: 'js',
    watch: [paths.appMockJs, paths.appMock, paths.appMock],
    env: {
        "NODE_ENV": "development"
    }
};

// 使用 nodemone 跑起服务器
gulp.task('serve', function () {
    return nodemon(nodemonConfig);
});

gulp.task('default', ['serve']);
