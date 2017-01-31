'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:AboutCtrl
 * @description
 * # CategoriesCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('CategoryCtrl', function ($routeParams, CategoriesService, CoursesService, Restangular, $scope) {

  	// Filter search
    this.search = {};
    this.search.category = {};
    this.search.category.id = $routeParams.id;

    // Courses list
    //this.coursesList = CoursesService.getCoursesCategory($routeParams.id);
    var _courses = Restangular.all('courses');

    _courses.getList().then(function (data) {
      $scope.coursesList = data.plain();
    });

    // Category View
    this.categoryPageName = CategoriesService.getCategoryName($routeParams.id);
    this.stars = "3";    
  }
);
