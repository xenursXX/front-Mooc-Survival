'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:AboutCtrl
 * @description
 * # CourseCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('CourseCtrl', function ($resource, $routeParams, CoursesService, $location, ngDialog, $scope, Restangular, UserService) {

    var courseId      = $routeParams.id;
    this.courseStep   = $routeParams.step;
    $scope.summary    = [];
    var userData      = UserService.getUserData();
    var lastScore     = [];

    if(userData){
      var userId = userData.id;
    }else{
      $scope.noLogged = true;
    }

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

      // Put to back the step of User
      Restangular.one('users', userId).one('courses', $routeParams.id).one('steps', $routeParams.step).customPUT({'current_step': $routeParams.step});

      // Change content for questions and classic course
      transformContent($scope.c);
    });


    // Check if the step is done
    $scope.stepDone = function (chapter_number) {
      if($routeParams.step){
        return;
      }
      for (var i = 0; i < $scope.c.steps.length; i++) {
        if($scope.c.steps[i].student.id == userId) {
          if($scope.c.steps[i].current_step >= chapter_number){
            console.log($scope.c.steps[i].current_step, chapter_number);
            return true;
          }
          break;
        }
      }
    }

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

          // Get score of quizz
          Restangular.one('quizzes', $scope.c.id).getList('scores').then(function (data) {
            // Find my score
            for (var i = 0; i < data.length; i++) {
              if(data[i].student.id == userId) {
                lastScore = data[i];
                break;
              }
            }
          })
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

      if(!lastScore.id) {
        // Post score
        Restangular.one('quizzes', $scope.c.id).one('scores').customPOST({'score': $scope.r, 'max_score' : $scope.max, 'student_id' : userId});
      }else{
        // Put score
        Restangular.one('quizzes', $scope.c.id).one('scores', lastScore.id).customPUT({'score': $scope.r, 'max_score': $scope.max, 'student_id' : userId});
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
      $location.path('/profile/' + userId);
    }
  }
);
