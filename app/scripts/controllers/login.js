'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:AboutCtrl
 * @description
 * # LoginCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('LoginCtrl', function (UserService, $location, ngDialog) {

    this.submitLogin = function () {
    	UserService.logIn();
    	ngDialog.closeAll();
    	$location.path('/');
    }

  }
);
