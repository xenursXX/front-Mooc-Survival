'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:AboutCtrl
 * @description
 * # CategoriesCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('CategoriesCtrl', function ($routeParams) {

  	// Categories list
    this.categoriesList = [
    	'montagne',
    	'forest',
    	'apocalypse',
    	'desert',
    	'jungle'
    ];

    // Category View
    this.category = $routeParams.name;
    this.date = new Date();
  }
);
