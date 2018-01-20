module.exports = function(grunt) {
    grunt.initConfig({
    browserify: {
        files: {
        src: './scripts/main.js',
        dest: './dist/bundle.js'
        },
        options: {
        transform: ['hbsfy'],
        }
},
    jshint: {
        files: ['./scripts/**/*.js'],
        options: {
        predef: ["document", "console"],
        esnext: true,
        globalstrict: true,
        globals: {},
        browserify: true
        }
    },
    watch: {
        javascripts: {
          files: ['./scripts/**/*.js'],
        tasks: ['jshint', 'browserify']
        },
        hbs: {
          files: ['./templates/**/*.hbs']
        }
    }
    });

    require('matchdep').filter('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['jshint', 'browserify', 'watch']);
};