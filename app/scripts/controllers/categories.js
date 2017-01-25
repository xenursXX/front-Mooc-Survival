'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:AboutCtrl
 * @description
 * # CategoriesCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('CategoriesCtrl', function ($routeParams, CategoriesService) {

  	// Categories list
    this.categoriesList = CategoriesService.getCategories();

    // Category View
    this.category = $routeParams.name;
    this.stars = "3";
    this.date = new Date();
  }
);
