var gulp = require('gulp');
var babel = require('gulp-babel');
var clean = require('gulp-clean');

// development mode?
var devBuild = (process.env.NODE_ENV !== 'production');

gulp.task('cleanTask', function () {
    return gulp.src('server/dist/', {read: false})
        .pipe(clean());
});

gulp.task('babelifyTask', ['cleanTask'], function(){
    return gulp.src(['server/' + '*/*.js', 'server/' + '*/*/*.js', 'server/*.js'])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('server/dist'));
});

gulp.task('default', ['babelifyTask']);