LIVERELOAD_PORT = 35730
lrSnippet = require('connect-livereload') { port: LIVERELOAD_PORT }
mountFolder = (connect, dir) ->
  connect.static require('path').resolve dir

module.exports = (grunt) ->
  require('matchdep').filterDev('grunt-*').forEach grunt.loadNpmTasks

  grunt.initConfig
    tusk_coffee:
      vendor:
        options:
          wrap: null
          runtime: false
        files:
          'public/javascripts/vendor.js': [
            'vendor/javascripts/common.js'
            'vendor/javascripts/underscore.js'
            'vendor/javascripts/jquery.js'
            'vendor/javascripts/backbone.js'
            'vendor/javascripts/bootstrap.js'
            'vendor/javascripts/handlebars.runtime.js'
          ]
          'public/test/unit/javascripts/unit-tests-vendor.js': [
            'test/unit/vendor/javascripts/mocha.js'
            'test/unit/vendor/javascripts/chai.js'
            'test/unit/vendor/javascripts/sinon.js'
            'test/unit/vendor/javascripts/sinon-chai.js'
            'test/unit/vendor/javascripts/mochaCov.js'
            'test/unit/vendor/javascripts/mochaTestHelper.js'
          ]
      app:
        options:
          wrap: 'CommonJS'
          modulesRoot: 'app'
          runtime: false
        files:
          'public/javascripts/app.js': ['app/**/*.coffee']
      unit:
        options:
          wrap: 'CommonJS'
          runtime: false
        files:
          'public/test/unit/javascripts/unit-tests.js': ['test/unit/**/*.coffee']

    less:
      dist:
        options:
          paths: ['app/stylesheets']
        files:
          'public/stylesheets/app.css': 'app/stylesheets/**/*.less'

    cssmin:
      combine:
        files:
          'public/stylesheets/vendor.css': ['vendor/stylesheets/*.css']
          'public/test/unit/stylesheets/test.css': ['test/unit/vendor/stylesheets/*.css']

    mocha:
      unit: ['public/test/unit/index.html']

    blanket:
      instrument:
        files:
          'public/test/unit/javascripts/': ['public/javascripts/']

    handlebars:
      compile:
        options:
          commonjs: true
        files:
          'public/raw-javascripts/templates.js': ['app/templates/**/*.hbs']

    coffee:
      app:
        options:
          bare: true
        expand: true
        flatten: false
        cwd: 'app/'
        src: ['**/*.coffee']
        dest: 'public/raw-javascripts/'
        ext: '.js'

    commonjs:
      modules:
        cwd: 'public/raw-javascripts/'
        src: ['**/*.js']
        dest: 'public/javascripts/'

    clean:
      build: [
        'public'
      ]

    connect:
      options:
        port: 8080
        hostname: '0.0.0.0'
        base: 'public'
      livereload:
        middlewear: (connect) ->
          [pushState, lrSnippet, mountFolder(connect, '.')]

    copy:
      main:
        files: [
          {expand: true, cwd: 'app/assets/', src: ['**'], dest: 'public'}
          {expand: true, cwd: 'vendor/fonts', src: ['**'], dest: 'public/fonts'}
          {expand: true, cwd: 'vendor/images', src: ['**'], dest: 'public/images'}
          {expand: true, src: ['test/unit/assets/*'], dest: 'public/test/unit', flatten: true}
        ]
      test:
        files: [
          {expand: true, cwd: 'public/javascripts/', src: ['**'], dest: 'public/test/unit/javascripts/'}
        ]

    concat:
      javascripts:
        src: [
          'public/javascripts/vendor.js'
          'public/javascripts/app.js'
          'public/javascripts/templates.js'
        ]
        dest: 'public/javascripts/index.js'
      stylesheets:
        src: [
          'public/stylesheets/vendor.css'
          'public/stylesheets/app.css'
        ]
        dest: 'public/stylesheets/index.css'

    watch:
      options:
        nospawn: true
      livereload:
        files: [
          'app/**/*.hbs'
          'app/assets/**/*.html'
          'test/unit/assets/**/*.html'
          'app/**/*.coffee'
          'test/unit/**/*.coffee'
          'app/**/*.less'
        ]
        tasks: ['build']

  grunt.registerTask 'live', ['build', 'connect:livereload', 'watch']
  grunt.registerTask 'build', ['deploy', 'copy:test']#, 'test:unit']
  grunt.registerTask 'deploy', ['clean:build', 'coffee', 'handlebars', 'commonjs', 'tusk_coffee', 'less', 'cssmin', 'copy:main', 'concat']
  grunt.registerTask 'test:unit', ['blanket']#, 'mocha:unit']
