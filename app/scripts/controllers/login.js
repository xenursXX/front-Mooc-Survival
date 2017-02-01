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

    var baseAccounts = Restangular.all('auth');

    $scope.myBuilding = {
	    username: "",
	    password: ""
	};

	this.submitLogin = function () {
		baseAccounts.post($scope.myBuilding).then(function (data) {

	    	UserService.loggedIn(data.plain());
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
