'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:ChangeCourseCtrl
 * @description
 * # ChangeCourseCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('ChangeCourseCtrl', function (UserService) {
    //GET de tous les chapitres d'un cours
    this.userProfile = UserService.userStatic[0];
    this.nbCourse = this.userProfile.courses.length;
    this.deleteChapter = function (idchapitre){
      // REquete pour delete un chapitre
    }
  });
