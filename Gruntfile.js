'use strict';

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
  };


  grunt.initConfig({
    clean: ["build"],
    react: {
      'build/js/components.js': [
          'app/components/**/*.jsx'
        ],
      'build/js/main.js': [
          'app/main.jsx'
        ]
    },
    copy: {
      main:{
        files: [{
                      expand: true,
            flatten: true,
            src: 'app/**/*.html',
            dest: 'build/',
          },
          {
            expand: true,
            flatten: true,
            src: 'app/libs/**/*.min.js',
            dest: 'build/js/',
          }
       ]
      }
    },
    watch: {
      options: {
          nospawn: true,
          livereload: 35729
      },
      scripts: {
        files: ['app/**/*'],
        tasks: ['build']
      },
    },
    connect: {
      options: {
          port: 3000,
          hostname: '0.0.0.0'
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              require('connect-livereload')({port: 35729}),
              mountFolder(connect, 'build')
            ];
          }
        }
      }
   },
   open: {
      server: {
        path: 'http://localhost:<%= connect.options.port %>'
      }
    }
  });

  grunt.registerTask('build', [
    'clean',
    'react',
    'copy'
  ]);

  grunt.registerTask('server', [
    'build',
    'connect:livereload',
    'open:server',
    'watch'
  ]);

  grunt.registerTask('default', ['build']);

};
