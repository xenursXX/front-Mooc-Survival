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

    Restangular.one('users', $routeParams.idprofile).get().then(function (data) {
  		$scope.userProfile = data.plain();
  	}, function (error) {
  		$location.path('/404');
  	})

    var userId = UserService.getUserData().id

    $scope.isMe = ( userId == $routeParams.idprofile) ? true : false;


    Restangular.all('courses').getList().then(function (data) {
      $scope.coursesListStudent = [];
      
      // Sort courses
      for(var i = 0; i < data.length; i++) {
        for(var j = 0; j < data[i].steps.length; j++){
          if(data[i].steps[j].student.id == userId) {
            $scope.coursesListStudent.push(data[i].steps[j]);
          }
        }
      }
    });

  }
);
