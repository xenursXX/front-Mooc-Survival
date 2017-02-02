'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:CreateCourseCtrl
 * @description
 * # CreateCourseCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('CreateQuizzCtrl', function ($resource, $routeParams, UserService, CoursesService, $location, Restangular) {
    var idCourse = $routeParams.idcourse;
    var quizz = Restangular.one('courses', idCourse);
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
    this.stepForward = function(dataForm,index){
      console.log(this.arrayQuestions.length);
      var arrayData = this.arrayQuestions;
      arrayData.push(dataForm[0]);
      quizz
        .all('quizzes')
        .post({title: "nouveauQuizz", number:1}, { Authorization: 'JWT ' + token })
        .then(function(data){
          console.log('createQuizz',data.plain().id)
          var idQuizz = data.plain().id;
          var i;
          var dataForm2 = Object.keys(dataForm).map(function (key) { return dataForm[key]; });
          for(i=0; i < dataForm2.length; i++){
            console.log(dataForm2);
            var checkbox = parseInt(dataForm2[i].checkbox);
              Restangular
              .one('quizzes', idQuizz)
                .all('questions')
                  .post({question:dataForm2[i].q1,number:i,good_answer:checkbox}, { Authorization: 'JWT ' + token })
                  .then(function(data){
                  var questionId = data.plain().id;
                  console.log('questionId',dataForm2[i]);
                  Restangular
                    .one('questions', questionId)
                      .all('answers')
                        .post({answer:dataForm2[i].r1,number:1}, { Authorization: 'JWT ' + token })
                        .post({answer:dataForm2[i].r2,number:2}, { Authorization: 'JWT ' + token })
                        .post({answer:dataForm2[i].r3,number:3}, { Authorization: 'JWT ' + token })
                        .post({answer:dataForm2[i].r4,number:4}, { Authorization: 'JWT ' + token })
                })
          }
        })
    }

    var SendDataForm = [];
    this.submited = function(dataForm, index){
      SendDataForm.push(dataForm);
      console.log('SendDataForm',dataForm);
    }
  }
);
