'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:AboutCtrl
 * @description
 * # CourseCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('CourseCtrl', function ($resource, $routeParams, CoursesService, $location, ngDialog, $scope, Restangular) {

    var courseId    = $routeParams.id;
    this.courseStep  = $routeParams.step;
    $scope.summary = [];

    var _courses = Restangular.all('courses');
    _courses.get(courseId).then(function (data) {
      $scope.c = data.plain();

      // get numbers of steps
      $scope.nbStep = $scope.c.chapters.length + $scope.c.quizzes.length;

      // Check bad request url
      if($routeParams.step > $scope.nbStep) {
        $location.path('#');
        return;
      }

      // Get summary for timeline and list chapters
      getSummary($scope.c);

      if(!$routeParams.step) {
        return;
      }

      // Change content for questions and classic course
      transformContent($scope.c);
    });

    var getSummary = function (content) {
      for (var i=0; i < content.chapters.length; i++) {
        $scope.summary.push(content.chapters[i]);
      }

      for (var i=0; i < content.quizzes.length; i++) {
        $scope.summary.push(content.quizzes[i]);
      }
    }

    var transformContent = function(content) {
      for (var i=0; i < content.chapters.length; i++) {
        if(content.chapters[i].number == $routeParams.step) {
          $scope.typeStep = 1;
          $scope.c = content.chapters[i];
        }
      }

      for (var i=0; i < content.quizzes.length; i++) {
        if(content.quizzes[i].number == $routeParams.step) {
          $scope.typeStep = 2;
          $scope.c = content.quizzes[i];
        }
      }
    }



    // Commentary
    this.update = function(commentForm){
      console.log('comment', commentForm);
      console.log('this', this);
      commentForm.stars = this.stars;
      commentForm.date = new Date();
      this.Comment.push(commentForm);
      this.form = {};
    };

    this.reset = function(){
      this.form = {};
    };



    // QUIIZZ
    $scope.userAnswers = {};
    
    // Verify number of answers
    this.getNumbersAnswers = function() {
      var nb = 0;
      for (var index in $scope.userAnswers) {
        if ($scope.userAnswers.hasOwnProperty(index)) {
          nb++;
        }
      } 
      return (nb == $scope.max) ? true : false;
    }

    // Result quizz
    this.nextStep = function () {
      var nextStepPage = parseInt(this.courseStep) + 1;

      // Simple step courses
      if($scope.typeStep == 1) {
        $location.path('/course/' + courseId + '/step/' + nextStepPage);
        return;
      }

      // Nb question & score --> dialog
      $scope.r    = 0;
      $scope.max  = $scope.c.questions.length;


      // Check if all response are checked
      if(!this.getNumbersAnswers()) {
        this.messageError = "Toutes les questions n'ont pas ete remplies";
        return;
      };

      // Count score
      for (var index in $scope.userAnswers) {
        if ($scope.userAnswers.hasOwnProperty(index)) {
          if($scope.userAnswers[index] == $scope.c.questions[index - 1].good_answer - 1) {
            $scope.r ++;
          }
        }
      }   

      // open dialog result
      ngDialog.open({
        template: 'views/includes/score-result-modal.html',
        scope: $scope
      });
    }


    // Dialog content
    $scope.getScore = function (score, max) {
      return (100 * (score/max));
    }

    $scope.quitCourse = function () {
      ngDialog.closeAll();
      $location.path('#');
    }
  }
);
