'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:AboutCtrl
 * @description
 * # ProfileCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('ProfileCtrl', function (UserService) {
    this.userProfile = UserService.userStatic[0];
    this.nbCourse = this.userProfile.courses.length;
    console.log(this.userProfile);

  }
);
