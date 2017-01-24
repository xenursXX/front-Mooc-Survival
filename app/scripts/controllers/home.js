'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:MainCtrl
 * @description
 * # HomeCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('HomeCtrl', function () {
    
    // Categories list
    this.categoriesList = [
    	'montagne',
    	'forest',
    	'apocalypse',
    	'desert',
    	'jungle'
    ];
   
  });
