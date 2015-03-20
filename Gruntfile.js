module.exports = function(grunt) {
  require('jit-grunt')(grunt);
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    watch: {
      sass: {
        files: ['assets/**/*.{scss,sass}','assets/modules/**/*.{scss,sass}'],
        tasks: ['sass:dist']
      }
    },
    
    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'css/style.css': 'assets/style.scss'
        }
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src : ['css/*.css', '*.html']
        },
        options: {
          watchTask: true,
          server: './'
        }
      }
    }
  });

  grunt.registerTask('default', ['browserSync', 'watch']);
  
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
};