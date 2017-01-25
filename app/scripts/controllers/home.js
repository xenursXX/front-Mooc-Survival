'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:MainCtrl
 * @description
 * # HomeCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('HomeCtrl', function (CategoriesService, CoursesService) {
    
    // Categories list
    this.categoriesList = CategoriesService.getCategories();

    // Courses list
   	this.coursesList = CoursesService.getCourses();
  });
