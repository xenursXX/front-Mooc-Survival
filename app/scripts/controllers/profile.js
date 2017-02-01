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
    var token = localStorage.getItem('token');
    Restangular.one('users', $routeParams.idprofile).get({}, { Authorization: 'JWT ' + token }).then(function (data) {
		$scope.userProfile = data.plain();
    console.log(data.plain());
	}, function (error) {
		$location.path('/404');
	})

    $scope.isMe = ( UserService.getUserData().id == $routeParams.idprofile) ? true : false;
    console.log('me', $scope.isME);
  }
);
