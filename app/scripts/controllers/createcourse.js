'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:CreateCourseCtrl
 * @description
 * # CreateCourseCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('CreateCourseCtrl', function ($resource, $routeParams, CoursesService, $location) {
    this.createchapter = function(){
      //get l'id du cours then send to next state
      $location.path('/createchapter/' + courseId + '/chapter/' + 1);

    }
  }
);
