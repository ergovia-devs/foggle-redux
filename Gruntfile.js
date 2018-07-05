/**
 * This file is part of foggle-redux.
 *
 * foggle-redux. is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * foggle-redux is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with foggle-redux.  If not, see <http://www.gnu.org/licenses/>.
 *
 * Gruntfile.js 05.07.18
 *
 * (c) Copyright 2018 ergovia GmbH
 */
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
