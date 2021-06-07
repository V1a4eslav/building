const { src, dest, parallel, series, watch } = require('gulp');
const sass = require('gulp-sass');
const notify = require('gulp-notify');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const fileinclude = require('gulp-file-include');
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');
const fs = require('fs');
const del = require('del');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const uglify = require('gulp-uglify-es').default;
// ===================================================
// ===================================================
// ===================================================
// ===================================================
// SCSS ================= SCSS ================= SCSS
const styles = () => {
   return src('./src/scss/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({
         outputStyle: 'expanded'
      }
      ).on('error', notify.onError()))
      .pipe(rename({
         suffix: '.min'
      }))
      .pipe(autoprefixer({
         cascade: false,
      }))
      .pipe(cleanCSS({
         level: 2
      }))
      .pipe(sourcemaps.write('.'))

      .pipe(dest('./app/css/'))
      .pipe(browserSync.stream());
};
// SCSS ========================================= SCSS
// ===================================================
// ===================================================
// ===================================================
// HTML ============= HTML ====================== HTML
const htmlInclude = () => {
   return src(['./src/**/index.html'])
      .pipe(fileinclude({
         prefix: '@',
         basepath: '@file'
      }))
      .pipe(dest('./app'))
      .pipe(browserSync.stream());
};
// HTML ========================================= HTML
// ===================================================
// ===================================================
// ===================================================
// IMG ================= IMG ===================== IMG
const imgToApp = () => {
   return src(['./src/img/**.jpg', './src/img/**.png', './src/img/**.jpeg', './src/img/**.svg'])
      .pipe(dest('./app/img'));
};
// IMG ============================================ IMG
// ====================================================
// ====================================================
// ====================================================
// RESOURCES ========== RESOURCES =========== RESOURCES
const resources = () => {
   return src(['./src/resources/**'])
      .pipe(dest('./app'));
};
// RESOURCES ================================ RESOURCES
// ====================================================
// ====================================================
// ====================================================
// FONTS =============== FONTS ================== FONTS
const fonts = () => {
   src('./src/fonts/**.ttf')
      .pipe(ttf2woff())
      .pipe(dest('./app/fonts/'));
   return src('./src/fonts/**.ttf')
      .pipe(ttf2woff2())
      .pipe(dest('./app/fonts/'));
};
// ====================================================
/*Тут мой костыль: первый запуск галпа для того чтоб сработал миксин 
Так как после первого запуска появляется include в  fonts.scss при втором запуске мы уже можем 
использовать его в работе .*/
const cb = () => { };
let srcFonts = './src/scss/basic/_fonts.scss';
let appFonts = './app/fonts/';
const fontsStyle = (done) => {
   let file_content = fs.readFileSync(srcFonts);
   if (file_content == '') {
      fs.writeFile(srcFonts, '', cb);
      return fs.readdir(appFonts, function (err, items) {
         if (items) {
            let c_fontname;
            for (var i = 0; i < items.length; i++) {
               let fontname = items[i].split('.');
               fontname = fontname[0];
               let fnn = fontname.split('-');
               if (c_fontname != fontname) {
                  fs.appendFile(srcFonts, '@include font("' + fnn[0] + '", "' + fontname + '",  ' + fnn[1] + ' , "normal");\r\n', cb);
               }
               c_fontname = fontname;
            }
         }
      });
   }
   done();
};
// FONTS ======================================== FONTS
// ====================================================
// ====================================================
// ====================================================
const clean = () => {
   return del(['app/*']);
};


const scripts = () => {
   return src('./src/js/main.js')
      .pipe(webpackStream({
         mode: 'development',
         output: {
            filename: 'main.js',
         },
         module: {
            rules: [{
               test: /\.m?js$/,
               exclude: /(node_modules|bower_components)/,
               use: {
                  loader: 'babel-loader',
                  options: {
                     presets: ['@babel/preset-env']
                  }
               }
            }]
         },
      }))
      .on('error', function (err) {
         console.error('WEBPACK ERROR', err);
         this.emit('end'); // Don't stop the rest of the task
      })

      .pipe(sourcemaps.init())
      .pipe(uglify().on("error", notify.onError()))
      .pipe(sourcemaps.write('.'))
      .pipe(dest('./app/js'))
      .pipe(browserSync.stream());
};



const watchFiles = () => {
   browserSync.init({
      server: {
         baseDir: "./app"
      }
   });
   watch('./src/scss/**/*.scss', styles);
   watch('./src/*.html', htmlInclude);
   watch('./src/img/**.jpg', imgToApp);
   watch('./src/img/**.png', imgToApp);
   watch('./src/img/**.jpeg', imgToApp);
   watch('./src/img/**.svg', imgToApp);
   watch('./src/resources/**', resources);
   watch('./src/fonts/**.ttf', fonts);
   watch('./src/fonts/**.ttf', fontsStyle);
   watch('./src/js/**/*.js', scripts);
};



exports.styles = styles;
exports.watchFiles = watchFiles;
exports.fileinclude = htmlInclude;
exports.fontsStyle = fontsStyle;
exports.fonts = fonts;


exports.default = series(clean, parallel(htmlInclude, styles, scripts, resources, imgToApp), fonts, fontsStyle, watchFiles);