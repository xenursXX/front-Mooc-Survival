'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:AboutCtrl
 * @description
 * # LoginCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('LoginCtrl', function (UserService, $location, ngDialog, Restangular, $scope) {

    var baseAuth = Restangular.all('auth');
    var baseUser = Restangular.all('users');

    $scope.myBuilding = {
	    username: "",
	    password: ""
	};

	this.submitLogin = function () {
		baseAuth.post($scope.myBuilding).then(function (data) {
	     	var tmp = data.plain().access_token;
        localStorage.setItem("token",tmp);

	    	baseUser.one($scope.myBuilding.username ).get({}, { Authorization: 'JWT ' + tmp }).then (function (data) {
	    		UserService.loggedIn(data.plain(), tmp);
	    	})

    		ngDialog.closeAll();
    		$location.path('/');

	    }, function(error) {
	    	ngDialog.open({
			    template: error,
			    plain: true
			});
	    })
	}

  }
);
