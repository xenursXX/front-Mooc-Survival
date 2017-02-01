'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:CreateCourseCtrl
 * @description
 * # CreateCourseCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('CreateQuizzCtrl', function ($resource, $routeParams, UserService, CoursesService, $location) {

    var token = localStorage.getItem('token');
    var idUser = UserService.getUserData().id;
    this.userId = idUser;
    this.arrayQuestions = [1,2];
    this.displayQuestion = true;
    this.chapters = [1,2];

    this.addQuestion = function(){
      this.arrayQuestions.push(+1);
      if(this.arrayQuestions.length > 19){
        this.displayQuestion = false;
      }
    }
    this.stepForward = function(){
      console.log("coucou");
    }

    var SendDataForm = [];
    this.submited = function(dataForm, index){
      SendDataForm.push(dataForm);
      console.log('SendDataForm',dataForm);
    }
  }
);
