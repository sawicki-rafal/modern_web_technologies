var gulp = require('gulp');
var sass = require('gulp-sass');
var csscomb = require('gulp-csscomb');
var chalk = require('chalk');

gulp.task('styles', function () {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(csscomb())
        .pipe(gulp.dest('./css/'))
});

gulp.task('watch-sass', function () {
    gulp.watch('sass/**/*.scss', ['styles'])
        .on('change', function (event) {
            var currentDate = new Date();
            var timeStamp = "" +
                ((currentDate.getHours() < 10 ? ("0" + currentDate.getHours()) : currentDate.getHours())) + ":" +
                ((currentDate.getMinutes() < 10 ? ("0" + currentDate.getMinutes()) : currentDate.getMinutes())) + ":" +
                ((currentDate.getSeconds() < 10 ? ("0" + currentDate.getSeconds()) : currentDate.getSeconds()));

            console.log('[' + chalk.green(timeStamp) + ']','File \'' + chalk.cyan(event.path) + '\' was ' + chalk.yellow(event.type));
        });
});