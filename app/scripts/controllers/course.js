'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:AboutCtrl
 * @description
 * # CourseCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('CourseCtrl', function ($resource, $routeParams, CoursesService, $location, ngDialog) {

    var courseId    = $routeParams.id;
    this.courseStep  = $routeParams.step;

    this.c = CoursesService.getCourse(courseId);


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

    

    // Result quizz
    this.nextStep = function () {
      var r = 0;
      var nextStepPage = parseInt(this.courseStep) + 1;

      // Simple step courses
      if(this.c.content.steps[this.courseStep - 1].type == 1) {
        $location.path('/course/' + courseId + '/step/' + nextStepPage);
        return;
      }

      // Check if all response are checked
      if(!this.getNumbersAnswers()) {
        this.messageError = "Toutes les questions n'ont pas ete remplies";
        return;
      };

      // Count score
      for (var index in this.answers) {
        if (this.answers.hasOwnProperty(index)) {
          if( this.c.content.steps[this.courseStep - 1].quizz[index].responses[this.answers[index]].good == true) {
            r++;
          }
        }
      }   

      return;
    }


    this.getNumbersAnswers = function() {
      var nb = 0;
      for (var index in this.answers) {
        if (this.answers.hasOwnProperty(index)) {
          nb++;
        }
      } 
      return (nb == this.c.content.steps[this.courseStep - 1].quizz.length) ? true : false;
    }

  }
);
