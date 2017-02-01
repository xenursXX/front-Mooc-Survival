'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:CreateCourseCtrl
 * @description
 * # CreateCourseCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('CreateCourseCtrl', function ($resource, $routeParams, CoursesService, $location, CategoriesService, UserService, Restangular) {
  var courses = Restangular.all('courses');
  var myToken = "toto";
  var idUser = 1;
  this.displayMessage = false;
  this.DisplayCategoryName = "montagne";
  var CategoryID = 1;
  this.categoriesList = CategoriesService.getCategories();
  this.SetCategory = function(categoryId, categoryName){
    this.DisplayCategoryName = categoryName;
    CategoryID = categoryId;
  } 

    this.createchapter = function(){

      if(this.titleCourse == "" ||  this.titleCourse == null){
      this.displayMessage = true;
      }else{
          courses.customPOST({title: this.titleCourse, author_id:idUser, content:"a", category_id:CategoryID, token:myToken})
          .then(function(data){
            console.log("data",data);
          },
        function(data){
          console.log("error");
        });
        this.displayMessage = false;
        console.log('CourseID', CategoryID);
        console.log('titleCourse', this.titleCourse);
        //get l'id du cours then send to next state
        // $location.path('/createchapter/' + CategoryID + '/chapter/' + 1);
      }


    }
  }
);
