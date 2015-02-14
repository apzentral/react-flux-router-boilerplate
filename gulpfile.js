/*!
 * Facebook React Starter Kit | https://github.com/kriasoft/react-starter-kit
 * Copyright (c) KriaSoft, LLC. All rights reserved. See LICENSE.txt
 */

'use strict';

// Include Gulp and other build automation tools and utilities
// See: https://github.com/gulpjs/gulp/blob/master/docs/API.md
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var path = require('path');
var merge = require('merge-stream');
var runSequence = require('run-sequence');
var webpack = require('webpack');
var browserSync = require('browser-sync');
var pagespeed = require('psi');
var argv = require('minimist')(process.argv.slice(2));

// Settings
var DEST = './build'; // The build output folder
var RELEASE = !!argv.release; // Minimize and optimize during a build?
var WATCH = !!argv.watch; // Watch build process
var AUTOPREFIXER_BROWSERS = [ // https://github.com/ai/autoprefixer
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

var src = {};
var watch = false || WATCH;
var pkgs = (function() {
  var pkgs = {};
  var map = function(source) {
    for (var key in source) {
      pkgs[key.replace(/[^a-z0-9]/gi, '')] = source[key].substring(1);
    }
  };
  map(require('./package.json').dependencies);
  return pkgs;
}());

// The default task
gulp.task('default', ['serve']);

// Clean up
gulp.task('clean', del.bind(null, [DEST]));

// HTML pages
gulp.task('pages', function() {
  src.pages = ['src/pages/**/*.html'];
  return gulp.src(src.pages)
    .pipe($.changed(DEST, {
      extension: '.html'
    }))
    .pipe($.if(RELEASE, $.htmlmin({
      removeComments: true,
      collapseWhitespace: true,
      minifyJS: true
    }), $.jsbeautifier()))
    .pipe(gulp.dest(DEST))
    .pipe($.size({
      title: 'pages'
    }));
});

// Bundle
gulp.task('bundle', function(cb) {
  var started = false;
  var config = require('./config/webpack.js')(RELEASE);
  var bundler = webpack(config);

  function bundle(err, stats) {
    if (err) {
      throw new $.util.PluginError('webpack', err);
    }

    !!argv.verbose && $.util.log('[webpack]', stats.toString({
      colors: true
    }));

    if (!started) {
      started = true;
      return cb();
    }
  }

  if (watch) {
    bundler.watch(200, bundle);
  } else {
    bundler.run(bundle);
  }
});

// Build the app from source code
gulp.task('build', ['clean'], function(cb) {
  runSequence(['pages', 'bundle'], cb);
});

// Launch a lightweight HTTP Server
gulp.task('serve', function(cb) {

  var url = require('url');
  var fs = require('fs');
  watch = true;

  runSequence('build', function() {
    browserSync({
      notify: false,
      // Customize the BrowserSync console logging prefix
      logPrefix: 'RSK',
      // Run as an https by uncommenting 'https: true'
      // Note: this uses an unsigned certificate which on first access
      //       will present a certificate warning in the browser.
      // https: true,
      server: {
        baseDir: DEST,
        // Allow web page requests without .html file extension in URLs
        middleware: function(req, res, cb) {
          var uri = url.parse(req.url);
          if (uri.pathname.length > 1 &&
            path.extname(uri.pathname) === '' &&
            fs.existsSync(DEST + uri.pathname + '.html')) {
            req.url = uri.pathname + '.html' + (uri.search || '');
          }
          cb();
        }
      }
    });

    gulp.watch(src.pages, ['pages']);
    gulp.watch(DEST + '/**/*.*', function(file) {
      browserSync.reload(path.relative(__dirname, file.path));
    });
    cb();
  });
});