'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:MainCtrl
 * @description
 * # HomeCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('HomeCtrl', function (CategoriesService, CoursesService, Restangular, $scope) {
    
    // Categories list
    this.categoriesList = CategoriesService.getCategories();

    // Courses list
   	var _courses = Restangular.all('courses');

    _courses.getList().then(function (data) {
      $scope.coursesList =  data.plain();
    });
  });
