/*jshint node:true */

module.exports = function( grunt ) {
	'use strict';

	var loader = require( 'load-project-config' ),
		config = require( 'cipher-plugin-config' );

	loader( grunt, config ).init({
		pkg: grunt.file.readJSON( 'package.json' )
	});
};
