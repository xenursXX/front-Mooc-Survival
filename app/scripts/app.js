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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
      .when('/course', {
        templateUrl: 'views/course.html',
        controller: 'CourseCtrl',
        controllerAs: 'course'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/categories', {
        templateUrl: 'views/categories.html',
        controller: 'CategoriesCtrl',
        controllerAs: 'categories'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
