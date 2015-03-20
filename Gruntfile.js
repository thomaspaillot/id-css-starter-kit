module.exports = function(grunt) {
  require('jit-grunt')(grunt);
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    watch: {
      files: ['assets/**/*.scss'],
      tasks: ['sass']
    },
    
    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'compressed'
      },
      dev: {
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
};