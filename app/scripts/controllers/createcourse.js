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
  var token = localStorage.getItem('token');
  var idUser = UserService.getUserData().id;

  // De base on set le select avec la catégorie Montagne
  var CategoryID = 1; //SET un ID pour
  this.DisplayCategoryName = "montagne";

  //message d'erreur
  this.displayMessage = false;

  // On Get toutes les catégories
  this.categoriesList = CategoriesService.getCategories();

  // On affiche la catégorie sélectionné
  this.SetCategory = function(categoryId, categoryName){
    this.DisplayCategoryName = categoryName;
    CategoryID = categoryId;
  }

    // Bouton création du cours
    this.createchapter = function(){
      if(this.titleCourse == "" ||  this.titleCourse == null){
      this.displayMessage = true;
      }else{
          courses.post({title: this.titleCourse, author_id:idUser, content:"a", category_id:CategoryID}, { Authorization: 'JWT ' + token })
          .then(function(data){
            console.log("data",data.plain().id);
            //get l'id du cours then send to next state
             $location.path('/createchapter/' + data.plain().id + '/chapter/' + 1);
          },
        function(data){
          console.log("error");
        });
        this.displayMessage = false;
      }
    }
  }
);
