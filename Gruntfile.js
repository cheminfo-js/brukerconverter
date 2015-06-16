'use strict';

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-urequire');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        urequire: {
            buildForAll: {
                template: 'combined',
                path: './src',
                main: 'brukerconverter',
                dstPath: './build/brukerconverter.js',
                optimize: true,
                dependencies: {
                    exports: {
                        root: {
                            'jcampconverter': 'BrukerConverter'
                        }
                    }
                }
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    require: 'should'
                },
                src: ['test/**/*.js']
            }
        }
    });

    grunt.registerTask('default', ['mochaTest', 'urequire']);
    grunt.registerTask('test', ['mochaTest']);

};