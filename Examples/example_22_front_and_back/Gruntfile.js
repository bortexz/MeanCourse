module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      options: {
        livereload:true
      },
      scripts: {
        files: ['**/*.js'],
        tasks: []
      }
    },
    connect: {
      task: { // give your task a name
        options: {
          port: 3000, // configure your port here
          base: 'public/',
          keepalive: true,
          livereload: true
        }
      }
    },
    nodemon: {
      dev: {
        script: 'server.js'
      }
    },
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      tasks: ['nodemon','connect', 'watch' ]
    }
  });

  // task setup
  grunt.registerTask('default', ['concurrent']);
  //grunt.registerTask('dev', [])
};