/**
 * Created by tnvl6480 on 16/02/2015.
 * build client :
 *  nettoie le répertoire buildClient
 *  jshint les js app.js (vérife syntaxe)
 *  minifie css
 */
module.exports = function(grunt) {
    grunt.initConfig({
        clean: {
            build: [
                'buildClient'
            ]
        },
        copy: {
            main: {

                        expand: true,
                        src: ['image/*','client/css/*','client/fonts/*'],
                        dest: 'buildClient/'
                }
        },
        jshint: {
            work: [
                'client/js/*.js',
                'Gruntfile.js' ]
        },
        cssmin: {
            production: {
                expand: true,
                cwd: 'client/css',
                src: ['*.css'],
                dest: 'buildClient/css',
                ext: '.min.css'
            }
        },
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 3
                },
                files: [
                    {
                        expand: true,
                        cwd: 'bu/',
                        src: ['**/*.jpg'],
                        dest: 'buildClient/image',
                        ext: '.jpg'
                    },
                    {
                        expand: true,
                        cwd: 'build/',
                        src: ['**/*.png'],
                        dest: 'build/',
                        ext: '.png'
                    }
                ]
            }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-copy');


    grunt.registerTask('buildClient', [
        'clean:build',
        'jshint:work',
        'cssmin:production',

    ]);

};