'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:AboutCtrl
 * @description
 * # ProfileCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('ProfileCtrl', function (UserService, $routeParams, Restangular, $location, $scope) {
    // this.userProfile = UserService.getUserData();

    // console.log(this.userProfile);

    var baseUser 	= Restangular.all('users');

    Restangular.one('users', $routeParams.idprofile).get().then(function (data) {
		$scope.userProfile = data.plain();
	}, function (error) {
		$location.path('/404');
	})

    $scope.isMe = ( UserService.getUserData().id == $routeParams.idprofile) ? true : false;

  }
);
