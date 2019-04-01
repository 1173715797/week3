var gulp = require('gulp');
var web = require('gulp-webserver');
gulp.task('web', function() {
    return gulp.src('./src/')
        .pipe(web({
            open: true,
            port: 8989,
            livereload: true,
            proxies: [{
                source: '/api/find',
                target: 'http://localhost:3000/api/find'
            }]
        }))
})