'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:AboutCtrl
 * @description
 * # CourseCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('CourseCtrl', function ($resource, $routeParams, CoursesService) {
    var courseId = $routeParams.id;
    console.log(courseId);

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

    this.c = CoursesService.getCourse(1);

  }
);
