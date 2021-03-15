var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var rename = require('gulp-rename');
var path = require('path');
var paths = require('./paths');
var uglify = require('gulp-uglify');
const Export = require('gulp-export');
const Babel = require('gulp-babel');
var cleanCSS = require('gulp-clean-css');

// nodemon 的配置
var nodemonConfig = {
    script: paths.appMockJs,
    ext: 'js tmpl md',
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

//发布任务
gulp.task('pub', ['js','css','less','image'])
// 发布前打包处理
gulp.task('js', function () {
    console.log(paths.appPub)
    return gulp.src(path.resolve(paths.appSrc, 'components/**/*.js'))
        .pipe(Babel({
            "presets": ["es2015"],
            "plugins": [
                "transform-class-properties",
                "transform-decorators-legacy"
            ]
        }))
        .pipe(gulp.dest(path.resolve(paths.appPub, 'lib')))
        .on('error', function (err) {
            console.log('[Error]', err.toString());
        })
        .pipe(uglify())
        .pipe(gulp.dest(path.resolve(paths.appPub, 'core')));
});
// 发布前打包处理css
gulp.task('css', function () {
    return gulp.src(path.resolve(paths.appSrc, 'components/**/*.css'))
        .pipe(gulp.dest(path.resolve(paths.appPub, 'lib')))
        .pipe(cleanCSS())
        .on('error', function (err) {
            console.log('[Error]', err.toString());
        })
        .pipe(gulp.dest(path.resolve(paths.appPub, 'core')));
});
// 发布前打包处理css
gulp.task('less', function () {
    return gulp.src(path.resolve(paths.appSrc, 'components/**/*.less'))
        .pipe(gulp.dest(path.resolve(paths.appPub, 'lib')))
        // .pipe(cleanCSS())
        .on('error', function (err) {
            console.log('[Error]', err.toString());
        })
        .pipe(gulp.dest(path.resolve(paths.appPub, 'core')));
});

gulp.task('image', function () {
    return gulp.src(path.resolve(paths.appSrc, 'components/**/images/**'))
        .on('error', function (err) {
            console.log('[Error]', err.toString());
        })
        .pipe(gulp.dest(path.resolve(paths.appPub, 'core')));
})
gulp.task('default', ['serve']);
