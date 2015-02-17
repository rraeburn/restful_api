'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jscs');

  grunt.initConfig({
    jshint: {
      dev: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js', 'index.js', 'app.js']
      }
    },

    simplemocha: {
      all: {
        src: ['test/**/*.js']
      }
    },

    jscs: {
      all: {
        options: {
          'preset':'google'
        },
        files: { 
          src: ['Gruntfile.js', 'index.js', 'lib/delete.js', 'lib/get.js', 'lib/patch.js', 'lib/post.js', 'lib/put.js', 'lib/requestRouter.js']
        }
      }
    }
  });

  grunt.registerTask('test', ['jshint', 'simplemocha', 'jscs']);
  grunt.registerTask('default', ['test']);
};