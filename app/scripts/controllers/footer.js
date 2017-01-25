'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:AboutCtrl
 * @description
 * # FooterCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('FooterCtrl', function (CategoriesService) {

  	// Categories list
    this.categoriesList = CategoriesService.getCategories();
  });
