'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:AboutCtrl
 * @description
 * # SignupCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('SignupCtrl', function (Restangular, $scope, ngDialog) {

    var baseRegister = Restangular.all('register');

    $scope.myBuilding = {
	    username: "",
	    email: "",
	    password: "",
	    role: "student"
	};

	$scope.register = function () {
		baseRegister.post($scope.myBuilding).then(function (data) {
	    	console.log(data.plain());
	    	ngDialog.open({
			    template: '<p class="text-center">Brave Type !</p>',
			    plain: true
			});
	    }, function(error) {
	    	ngDialog.open({
			    template: '<p class="text-center">' + error.data.message + '</p>',
			    plain: true
			});
	    })
	}

    

  }
);
