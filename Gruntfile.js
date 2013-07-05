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
    }
  });

  grunt.loadNpmTasks("grunt-contrib-compass");
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask("deploy", ["compass:dev", "copy"]);
  grunt.registerTask('default', ['watch']);

};
