'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:CreateCourseCtrl
 * @description
 * # CreateCourseCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('CreateCourseCtrl', function ($resource, $routeParams, CoursesService, $location, CategoriesService) {

  this.displayMessage = false;
  this.DisplayCategoryName = "montagne";
  var CourseID = 1;
  this.categoriesList = CategoriesService.getCategories();
  this.SetCategory = function(categoryId, categoryName){
    this.DisplayCategoryName = categoryName;
    CourseID = categoryId;
  }

    this.createchapter = function(){

      if(this.titleCourse == "" ||  this.titleCourse == null){
      this.displayMessage = true;
      }else{
        this.displayMessage = false;
        console.log('CourseID', CourseID);
        console.log('titleCourse', this.titleCourse);
        //get l'id du cours then send to next state
        $location.path('/createchapter/' + courseId + '/chapter/' + 1);
      }


    }
  }
);
