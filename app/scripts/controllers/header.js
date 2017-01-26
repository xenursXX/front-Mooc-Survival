'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:AboutCtrl
 * @description
 * # HeaderCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('HeaderCtrl', function ($routeParams, CategoriesService, CoursesService, UserService, ngDialog) {

  	// Fake list
    this.coursesList = CoursesService.getCourses();

    // Categories list
    this.categoriesList = CategoriesService.getCategories();

    // Is view / Is active?
    this.isActiveCategoryView = function (category) {
    	return ($routeParams.id == category) ? true : false;
    };

    // Search autocomplete
    this.search = {"title": "", "category_name": ""};
    
    // Is connected
    this.isLogged = function () {
        return UserService.isConnected();
    }

    this.openLogin = function () {
        ngDialog.open({
            template: 'views/includes/login-modal.html',
            controller: 'LoginCtrl as login'
        });
    }
  });
