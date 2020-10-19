const gulp = require("gulp")
const cssmin = require("gulp-cssmin")
const autoprefixer = require("gulp-autoprefixer")
const babel = require("gulp-babel")
const uglify = require("gulp-uglify")
const htmlmin = require("gulp-htmlmin")
const del = require("del")
const webserver = require("gulp-webserver")

const css = () => {
    return gulp.src("./src/css/**").pipe(autoprefixer()).pipe(cssmin())
        .pipe(gulp.dest("./dist/css"))
}

const js = () => {
    return gulp.src("./src/js/*.js").pipe(babel({
            presets: ["@babel/env"]
        }))
        .pipe(uglify())
        .pipe(gulp.dest("./dist/js"))
}

const img = () => {
    return gulp.src("./src/images/**").pipe(gulp.dest("./dist/images"))
}

const ico = () => {
    return gulp.src("./src/iconfont/**").pipe(gulp.dest("./dist/iconfont"))
}

const lib = () => {
    return gulp.src("./src/lib/*.js").pipe(gulp.dest("./dist/lib"))
}
const html = () => {
    return gulp.src("./src/pages/*.html").pipe(htmlmin({
            collapseWhitespace: true, //压缩空格
            removeAttributeQuotes: true, //移除属性的引号
            collapseBooleanAttributes: true, //把值为布尔值的属性简写
            removeComments: true, //移除注释
            minifyCSS: true, //把页面里面的style标签里面的css样式也去空格
            minifyJS: true,
        }))
        .pipe(gulp.dest("./dist/pages"))
}

const boot = () => {
    return gulp.src("./src/bootstrap/**").pipe(gulp.dest("./dist/bootstrap"))
}

const watch = () => {
    gulp.watch("./src/css/*.css", css)
    gulp.watch("./src/js/*.js", js)
    gulp.watch("./src/lib/*.js", lib)
    gulp.watch("./src/images/**", img)
    gulp.watch("./src/pages/*.html", html)
    gulp.watch("./src/iconfont/**", ico)
}

const server = () => {
    return gulp.src("./dist")
        .pipe(webserver({
            port: 80,
            open: "../pages/index.html",
            livereload: true,
            proxies: [{
                source: "/weather",
                target: "https://way.jd.com/jisuapi/weather"
            }]

        }))
}

const dell = () => {
    return del(["./dist"])
}

module.exports.default =
    gulp.series(
        dell,
        gulp.parallel(
            css,
            html,
            js,
            img,
            lib,
            ico,
            boot
        ),
        server,
        watch
    )