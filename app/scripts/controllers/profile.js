'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:AboutCtrl
 * @description
 * # ProfileCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('ProfileCtrl', function (UserService, $routeParams, Restangular, $location, $scope, ngDialog) {
    // this.userProfile = UserService.getUserData();

    // console.log(this.userProfile);

    

    if(!UserService.getUserData()) {
      $location.path('/404');
      ngDialog.open({
          template: '<p class="text-center">Il faut être connecté</p>',
          plain: true
      });
      return;
    }

    var userId = UserService.getUserData().id;

    Restangular.one('users', $routeParams.idprofile).get({}, { Authorization: 'JWT ' + localStorage.getItem("token") }).then(function (data) {
  		$scope.userProfile = data.plain();
  	}, function (error) {
  		$location.path('/404');
  	})

    

    $scope.isMe = ( userId == $routeParams.idprofile) ? true : false;


    Restangular.all('courses').getList().then(function (data) {
      $scope.coursesListStudent = [];
      
      // Sort courses
      for(var i = 0; i < data.length; i++) {
        for(var j = 0; j < data[i].steps.length; j++){
          if(data[i].steps[j].student.id == userId) {
            //console.log(data[i].quizzes[0].id);
            // data[i].steps[j].result = {};
            
            getScore(data[i].quizzes[0].id, j);
            $scope.coursesListStudent.push(data[i].steps[j]);
            //console.log(data[i].steps[j]);
          }
        }
      }
    });

    var getScore = function (id_quizz, key) {
      Restangular.one('quizzes', id_quizz).getList('scores').then(function (data) {
        // Find my score
        for (var i = 0; i < data.length; i++) {
          if(data[i].student.id == userId) {

            Restangular.one('quizzes', id_quizz).one('scores', data[i].id).get().then(function (data2) {
              if(data2.max_score){
                $scope.coursesListStudent[key].result = data2.plain();
              }
            })

            break;
          }
        }
      })
    }

  }
);
