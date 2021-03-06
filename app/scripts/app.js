'use strict';

/**
 * @ngdoc overview
 * @name frontMoocSurvivalApp
 * @description
 * # frontMoocSurvivalApp
 *
 * Main module of the application.
 */
angular
  .module('frontMoocSurvivalApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularMoment',
    'ui.bootstrap',
    'ngDialog',
    'angularFileUpload',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:5555/v1/');

    // var token = localStorage.getItem('SurvivalToken');
    // RestangularProvider.setDefaultHeaders({Authorization: 'JWT ' + token});

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/profile/:idprofile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
      .when('/course/:id', {
        templateUrl: 'views/course.html',
        controller: 'CourseCtrl',
        controllerAs: 'course'
      })
      .when('/course/:id/step/:step', {
        templateUrl: 'views/course.html',
        controller: 'CourseCtrl',
        controllerAs: 'course'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup'
      })
      .when('/categories', {
        templateUrl: 'views/categories.html',
        controller: 'CategoriesCtrl',
        controllerAs: 'categories'
      })
      .when('/category/:id', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl',
        controllerAs: 'category'
      })
      .when('/createcourse', {
        templateUrl: 'views/createcourse.html',
        controller: 'CreateCourseCtrl',
        controllerAs: 'create'
      })
      .when('/createchapter/:idcourse/chapter/:idchapter', {
        templateUrl: 'views/createchapter.html',
        controller: 'CreateChapterCtrl',
        controllerAs: 'create'
      })
      .when('/createquizz/:idcourse', {
        templateUrl: 'views/createquizz.html',
        controller: 'CreateQuizzCtrl',
        controllerAs: 'create'
      })
      .when('/changecours/:idcourse', {
        templateUrl: 'views/changecourse.html',
        controller: 'ChangeCourseCtrl',
        controllerAs: 'change'
      })
      .when('/changecours/:idcourse/chapter/:idchapter', {
        templateUrl: 'views/changechapter.html',
        controller: 'ChangeChapterCtrl',
        controllerAs: 'change'
      })
      .when('/404', {
        templateUrl: 'views/404.html'
      })
      .otherwise({
        redirectTo: '/404'
      });
  });
