'use strict';

module.exports = function (grunt) {

	// https://github.com/sindresorhus/load-grunt-tasks
	// Usually you would have to load each task one by one
	// which is unneccessarily cumbersome.  This module will 
	// read the package.json dependencies, devDependencies, 
	// and peerDependencies and load grunt tasks that match 
	// the following pattern
	// grunt.loadNpmTasks('grunt-contrib-watch');

	//Load Grunt Tasks Automatically 
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take. Can help when optimizing 
	// automated tasks and build times
  	require('time-grunt')(grunt);

  	// Define the configuration for all the tasks
  	grunt.initConfig ({

  		// Project Settings
  		project: {
  			app: 'app',
  			images: 'app/images',
  			index: 'app/index.html',
  			scripts: 'app/scripts',
  			styles: 'app/styles',
  			templates: 'app/templates',
  			components: 'bower_components',
  			dist: 'dist',
  			grunt: 'Gruntfile.js'
  		},

  		// Watch Files For LiveReload and Other Tasks
  		watch: {
  			// components: {
  			// 	files: ['<%= project.components %>/{,*/}*.{js,css}'],
  			// 	tasks: []
  			// },
  			// index: {
  			// 	files: ['<%= project.index %>'],
  			// 	tasks: []
  			// },
  			// images: {
  			// 	files: ['<%= project.images %>/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'],
  			// 	tasks: []
  			// }, 
  			// scripts: {
  			// 	files: ['<%= project.scripts %>/{,*/}*.js'],
  			// 	tasks: []
  			// },
  			// styles: {
  			// 	files: ['<%= project.styles %>/{,*/}*.css'],
  			// 	tasks: []
  			// },
  			// templates: {
  			// 	files: ['<%= project.templates %>/{,*/}*.html'],
  			// 	tasks: []
  			// },
  			all : {
  			 	options: { livereload: true },
  			 	files : [
  			 		'<%= project.index %>',
  			 		'<%= project.components %>/{,*/}*.{js,css}',
  			 		'<%= project.images %>/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
  			 		'<%= project.scripts %>/{,*/}*.js',
  			 		'<%= project.styles %>/{,*/}*.css',
  			 		'<%= project.templates %>/{,*/}*.html'
  			 	 ]
  			 }
  		},

  		// Grunt Server and LiveReload Settings
  		connect: {
  			options: {
  				port: 3000,
  				hostname: 'localhost',
  				base: 'app'
  			},
  			livereload: {
  				open: true,
  				port: 35729
  			}
  			// dist: {
  			// 	options: {
  			// 		base: '<%= project.dist %>'
  			// 	}
  			// }
  		}

  	});

	// Register and Define Tasks

	// grunt server
	grunt.registerTask('server', [
		'connect:livereload',
		'watch'
	]);

};