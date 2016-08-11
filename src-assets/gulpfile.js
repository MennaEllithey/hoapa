'use strict';


// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sassdoc = require('sassdoc');
var browserSync = require('browser-sync');


// -----------------------------------------------------------------------------
// Configuration
// -----------------------------------------------------------------------------

var input = 'dev-assets/**/*.scss';
var output = '../public/css/';
var sassOptions = { outputStyle: 'expanded' };
var autoprefixerOptions = { browsers: ['last 2 versions', '> 5%', 'Firefox ESR'] };
var sassdocOptions = { dest: './public/sassdoc' };


// Start browserSync server
gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: '../'
            // http://localhost:3000/html/ will be the user to access the test files
        }
    })
});

// -----------------------------------------------------------------------------
// Sass compilation
// -----------------------------------------------------------------------------

gulp.task('sass', function () {
  return gulp
    .src(input)
    // .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    // .pipe(sourcemaps.write())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(output))
    .pipe(browserSync.reload({ // Reloading with Browser Sync
            stream: true
        }));
});


// // -----------------------------------------------------------------------------
// // Sass documentation generation
// // -----------------------------------------------------------------------------

// gulp.task('sassdoc', function () {
//   return gulp
//     .src(input)
//     .pipe(sassdoc(sassdocOptions))
//     .resume();
// });


// -----------------------------------------------------------------------------
// Watchers
// -----------------------------------------------------------------------------

gulp.task('watch', function() {
  return gulp
    // Watch the input folder for change,
    // and run `sass` task when something happens
    .watch(input, ['sass'])
    .watch('../*.html', browserSync.reload)
    // When there is a change,
    // log a message in the console
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});


// -----------------------------------------------------------------------------
// Production build
// -----------------------------------------------------------------------------

gulp.task('prod', ['sassdoc'], function () {
  return gulp
    .src(input)
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(output));
});


// -----------------------------------------------------------------------------
// Default task
// -----------------------------------------------------------------------------

gulp.task('default', ['sass', 'browserSync', 'watch' /*, possible other tasks... */]);