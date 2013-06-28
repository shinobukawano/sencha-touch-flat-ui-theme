'use strict';

var path = require('path');
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

var folderMount = function folderMount(connect, point) {
  return connect.static(path.resolve(point));
};

module.exports = function(grunt) {

  grunt.initConfig({
    compass: {
      dev: {
        options: {
          config: 'src/sass/config.rb',
          environment: "development"
        }
      },
      prod: {
        options: {
          config: 'src/sass/config.rb',
          environment: "production"
        }
      }
    },
    watch: {
      files: [
        'src/sass/flat.scss',
        'src/themes/**/*'
      ],
      tasks: 'deploy'
    },
    copy: {
      main: {
        files: [
            { src: 'generated/flat.css', dest: 'demo/resources/css/flat.css' }
        ]
      }
    },
    livereload: {
      port: 35729 // Default livereload listening port.
    },
    connect: {
      livereload: {
        options: {
          port: 9001,
          middleware: function(connect, options) {
            return [lrSnippet, folderMount(connect, options.base)]
          }
        }
      }
    },
    // Configuration to be run (and then tested)
    regarde: {
      txt: {
        files: 'demo/**/*',
        tasks: ['livereload']
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-compass");
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-livereload');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-regarde');

  grunt.registerTask("deploy", ["compass:dev", "copy"]);
  grunt.registerTask('default', ['watch']);

};
