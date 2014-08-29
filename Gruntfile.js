module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      minify: {
        expand: true,
        cwd: 'www/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'www/css/min/',
        ext: '.min.css'
      },
      combine: {
        files: {
          'www/css/dist/king-final.min.css': ['www/css/min/*.min.css']
        }
      }
    },
    jshint:{
      all: ['www/js/king.js']
    },
    uglify: {
      options: {
        mangle: false
      },
      default: {
        files: {
          'www/js/dist/king.min.js': ['www/js/idangerous.swiper-2.1.min.js', 'www/js/king.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['cssmin', 'jshint', 'uglify']);

}
