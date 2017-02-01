'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:ChangeCourseCtrl
 * @description
 * # ChangeCourseCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('ChangeCourseCtrl', function ($scope, UserService, CoursesService, $routeParams, Restangular, $location) {
    //GET de tous les chapitres d'un cours
    var idUser = UserService.getUserData().id;
    var idCourse = $routeParams.idcourse;
    var token = localStorage.getItem('token');
    var getCourse = Restangular.one('courses',$routeParams.idcourse).get({}, { Authorization: 'JWT ' + token });
    var removeChapter = Restangular.one('courses', $routeParams.idcourse);
    var removeCourse = Restangular.one('courses', $routeParams.idcourse);
    $scope.idcourse = idCourse;
    getCourse.then(function(data){
      console.log('datass', data.plain());
      $scope.title = data.plain().title;
      $scope.category = data.plain().category.name;
      $scope.nbChapitres = data.plain().chapters.length;
      var newchapter = data.plain().chapters.length+1;
      $scope.chapters = data.plain().chapters;
    })
    this.userProfile = UserService.userStatic[0];
    this.nbCourse = this.userProfile.courses.length;


    this.deleteChapter = function (idchapitre){
      removeChapter.one('chapters', idchapitre).remove({},{ Authorization: 'JWT ' + token });
      location.reload();
    }
    this.updateChapter = function(idchapitre){
      $location.path('/changecours/' + idCourse + '/chapter/' + idchapitre);
    }
    this.addChapter = function(idchapitre){
      $location.path('/createchapter/' + idCourse + '/chapter/' + $scope.chapters+1);
    }
    this.deleteCourse = function(){
      removeCourse.remove({},{ Authorization: 'JWT ' + token });
      $location.path('/profile/' + idUser);
    }
  });
