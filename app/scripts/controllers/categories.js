'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:AboutCtrl
 * @description
 * # CategoriesCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('CategoriesCtrl', function (CategoriesService) {

  	// Categories list
    this.categoriesList = CategoriesService.getCategories();
  }
);
