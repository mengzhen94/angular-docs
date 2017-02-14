'use strict';
/*
By passing phoneList inside the dependencies array when defining 
the phonecatApp module, AngularJS will make all entities registered 
on phoneList available on phonecatApp as well.
*/

// Define the `phonecatApp` module
angular.module('phonecatApp', [
	'ngRoute',
	'ngAnimate',
  	// ...which depends on the `phoneList` module
  	'phoneDetail',
  	'core',
  	'phoneList'
]);