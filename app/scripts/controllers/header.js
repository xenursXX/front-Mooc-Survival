'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:AboutCtrl
 * @description
 * # HeaderCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('HeaderCtrl', function ($routeParams, CategoriesService, CoursesService, UserService, ngDialog, Restangular, $scope) {

  	// Fake list
    var _courses = Restangular.all('courses');
    _courses.getList().then(function (data) {
      $scope.coursesList2 = test(data.plain());
    });


    // TODO :Find another solution more clean for waste time
    var test = function (tmp) {
        for (var i = 0; i < tmp.length; i++) {
            delete tmp[i].quizzes;
            delete tmp[i].comments;
            delete tmp[i].content;
            delete tmp[i].chapters;
            delete tmp[i].students;
            delete tmp[i].author;
            delete tmp[i].category;
        }

        return tmp;
    }

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
