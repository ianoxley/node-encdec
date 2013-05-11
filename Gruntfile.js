module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js']
    },
    nodeunit: {
      all: ['test/**/*.js']
    },
    watch: {
      scripts: {
        files: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js'],
        tasks: ['test'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['test']);
  grunt.registerTask('test', ['jshint', 'nodeunit']);
};
