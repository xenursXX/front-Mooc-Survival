'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:AboutCtrl
 * @description
 * # HeaderCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('HeaderCtrl', function ($routeParams, CategoriesService, CoursesService) {

  	// Fake list
    this.coursesList = CoursesService.getCourses();

    // Categories list
    this.categoriesList = CategoriesService.getCategories();

    // Is view / Is active?
    this.isActiveCategoryView = function (category) {
    	return ($routeParams.id == category) ? true : false;
    };

    this.search = {"title": "", "category_name": ""};
    // // Title --> Category name (Autocomplete)
    // this.searchText = function () {
    //   this.search.category_name == this.search.title;
    // }
  });
