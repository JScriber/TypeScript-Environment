var gulp = require('gulp');
var ts = require('gulp-typescript');
var browserify = require('gulp-browserify');
 
var entryPoint = 'main.js';
var typescriptFolder = 'typescript/';
var bundleFolder = 'build/';
 

gulp.task('default', function() {
	// Typescript
    gulp.src('workflow/*.ts')
        .pipe(ts())
        .pipe(gulp.dest(typescriptFolder));

    // Browserify 
    gulp.src(typescriptFolder+entryPoint)
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest(bundleFolder))
});