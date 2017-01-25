'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:AboutCtrl
 * @description
 * # CategoriesCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('CategoryCtrl', function ($routeParams, CategoriesService, CoursesService) {

    // Courses list
    this.coursesList = CoursesService.getCoursesCategory($routeParams.id);

    // Category View
    this.categoryPageName = CategoriesService.getCategoryName($routeParams.id);
    this.stars = "3";    
  }
);
