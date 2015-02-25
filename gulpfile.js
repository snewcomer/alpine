var gulp = require('gulp'),
  gutil = require('gulp-util'),
  coffee = require('gulp-coffee'),
  browserify = require('gulp-browserify'),
  compass = require('gulp-compass'),
  connect = require('gulp-connect'),
  //connectPHP = require('gulp-connect-php'),
  gulpif = require('gulp-if'),
  uglify = require('gulp-uglify'),
  minifyHTML = require('gulp-minify-html'),
  jsonminify = require('gulp-jsonminify'),
  imagemin = require('gulp-imagemin'),
  pngcrush = require('imagemin-pngcrush'),
  concat = require('gulp-concat');

var env,
  coffeeSources,
  jsSources,
  sassSources,
  htmlSources,
  jsonSources,
  outputDir,
  sassStyle;

env = process.env.NODE_ENV || 'production';

if (env==='development') {
  outputDir = 'builds/development/';
  sassStyle = 'expanded';
} else {
  outputDir = 'builds/production/';
  sassStyle = 'compressed';
}


coffeeSources = ['components/coffee/index.coffee'];
jsSources = ['components/js/index.js'];
sassSources = ['components/sass/style.scss'];
htmlSources = [outputDir + '*.html'];
jsonSources = [outputDir + 'js/*.json'];


gulp.task('coffee', function() {
  gulp.src(coffeeSources)
  .pipe(coffee({ bare: true })
  .on('error', gutil.log))
  .pipe(gulp.dest('components/js'))
});

gulp.task('js', function() {
  gulp.src(jsSources)
  .pipe(concat('index.js'))
  .pipe(browserify())
  .pipe(gulpif(env === 'production', uglify()))
  .pipe(gulp.dest(outputDir + 'js'))
  .pipe(connect.reload())
});

gulp.task('compass', function() {
  gulp.src(sassSources)
  .pipe(compass({
    sass: 'components/sass',
    image: outputDir + 'images',
    style: sassStyle,
    require: 'breakpoint'
  })
  .on('error', gutil.log))
  .pipe(gulp.dest(outputDir + 'css'))
  .pipe(connect.reload())
});

gulp.task('watch', function() {
  gulp.watch(coffeeSources, ['coffee']);
  gulp.watch(jsSources, ['js']);
  gulp.watch('components/sass/*.scss', ['compass']);
  gulp.watch('builds/development/*.html', ['html']);
  //gulp.watch('builds/development/*.php', ['php']);
  gulp.watch('builds/development/js/*.json', ['json']);
  gulp.watch('builds/development/images/**/*.*', ['images']);
});

gulp.task('connect', function() {
  connect.server({
    root: outputDir,
    livereload: true
  });
});

gulp.task('html', function() {
  gulp.src('builds/development/*.html')
  .pipe(gulpif(env === 'production', minifyHTML()))
  .pipe(gulpif(env === 'production', gulp.dest(outputDir)))
  .pipe(connect.reload())
});

gulp.task('php', function() {
  gulp.src('builds/development/*.php')
  .pipe(gulpif(env === 'production', minifyHTML()))
  .pipe(gulpif(env === 'production', gulp.dest(outputDir)))
  .pipe(connect.reload())
});

gulp.task('images', function() {
  gulp.src('builds/development/images/**/*.*')
  .pipe(gulpif(env === 'production', imagemin({
    progressive: true,
    svgoPlugins: [{ removeViewBox: false }],
    use: [pngcrush()]
  })))
  .pipe(gulpif(env === 'production', gulp.dest(outputDir + 'images')))
  .pipe(connect.reload())
});

gulp.task('json', function() {
  gulp.src('builds/development/js/*.json')
  .pipe(gulpif(env === 'production', jsonminify()))
  .pipe(gulpif(env === 'production', gulp.dest('builds/production/js')))
  .pipe(connect.reload())
});

gulp.task('default', ['html', 'php', 'json', 'coffee', 'js', 'compass', 'images', 'connect', 'watch']);
