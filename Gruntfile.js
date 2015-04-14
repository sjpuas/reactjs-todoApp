'use strict';

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    react: {
      'app/build/combined.js': [
          'app/templates/button.jsx'
        ],
      'app/build/main.js': [
            'app/main.jsx'
          ]
    }
  });

  grunt.registerTask('build', [
    'react'
  ]);

  grunt.registerTask('default', ['build']);

};
