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
        .post({ title: "nouveauQuizz", number:1 }, { Authorization: 'JWT ' + token })
        .then(function(data){
          console.log('createQuizz', data.plain().id)

          var idQuizz = data.plain().id;
          var dataForm2 = Object.keys(dataForm)
            .map(function (key) { return dataForm[key]; })
            .forEach(function(question, indexQuestion) {
              console.log(dataForm2);

              Restangular
                .one('quizzes', idQuizz)
                .all('questions')
                .post({
                  question: question.q1,
                  number: indexQuestion,
                  good_answer: +question.checkbox
                }, {
                  Authorization: 'JWT '+ token
                })
                .then(function(data){
                  var questionId = data.plain().id;

                  var answers = [];
                  answers[0] = { answer: question.r1, number: 1 };
                  answers[1] = { answer: question.r2, number: 2 };
                  answers[2] = { answer: question.r3, number: 3 };
                  answers[3] = { answer: question.r4, number: 4 };

                  answers.forEach(function(answer) {
                    Restangular
                      .one('questions', questionId)
                      .all('answers')
                      .post(answer, { Authorization: 'JWT ' + token });
                  })
                })
            })
          // }
        })
    }

    var SendDataForm = [];
    this.submited = function(dataForm, index){
      SendDataForm.push(dataForm);
      console.log('SendDataForm',dataForm);
    }
  }
);
