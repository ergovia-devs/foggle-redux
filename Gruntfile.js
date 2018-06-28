module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        babel: {
            options: {
                sourceMap: true,
                plugins: ['transform-react-jsx', 'transform-object-rest-spread'],
                presets: ['es2015', 'react'],
                sourceRoot: 'src'
            },
            jsx: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['*.jsx', '*.js'],
                    dest: 'build',
                    ext: '.js'
                }]
            },
            dist: {

                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: '**/*.js',
                        dest: 'build/'
                    }
                ]

            }

        },

        clean: {
            main: ['build/']
        },

        copy: {
            resources: {
                files: [
                    {
                        expand: true,
                        src: ['package.json'],
                        dest: 'build/foggle/'
                    }
                ]
            }
        },


    });

    grunt.registerTask('build', 'Baut das Projekt', ['clean', 'copy', 'babel']);

};
