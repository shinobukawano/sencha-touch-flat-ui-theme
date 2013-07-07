module.exports = function(grunt) {

  grunt.initConfig({
    compass: {
      dev: {
        options: {
          config: 'src/sass/config.rb',
          environment: "development",
          outputStyle: "nested"
        }
      },
      prod: {
        options: {
          config: 'src/sass/config.rb',
          environment: "production",
          outputStyle: "compressed"
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
            { src: 'generated/flat.css', dest: 'demo/resources/css/flat.css' },
            { src: 'src/themes/fonts/lato/lato-black.ttf', dest: 'demo/resources/fonts/lato-black.ttf' },
            { src: 'src/themes/fonts/lato/lato-bold.ttf', dest: 'demo/resources/fonts/lato-bold.ttf' },
            { src: 'src/themes/fonts/lato/lato-italic.ttf', dest: 'demo/resources/fonts/lato-italic.ttf' },
            { src: 'src/themes/fonts/lato/lato-regular.ttf', dest: 'demo/resources/fonts/lato-regular.ttf' }
        ]
      },
      release: {
        files: [
            { src: 'src/themes/fonts/lato/*', dest: 'dist/' },
            { src: 'src/themes/stylesheets/sencha-touch/_flat.scss', dest: 'dist/' },
            { src: 'src/themes/stylesheets/sencha-touch/flat/**/*', dest: 'dist/' }
        ]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-compass");
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask("deploy", ["compass:dev", "copy:main"]);
  grunt.registerTask('default', ['watch']);

};
