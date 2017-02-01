'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:AboutCtrl
 * @description
 * # ProfileCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('ProfileCtrl', function (UserService, $routeParams, Restangular) {
    this.userProfile = UserService.getUserData();
    //this.nbCourse = this.userProfile.courses.length;
    console.log(this.userProfile);

  }
);
