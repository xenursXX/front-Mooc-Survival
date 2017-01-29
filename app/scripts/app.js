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
    'angularFileUpload'

  ])
  .config(function ($routeProvider) {
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
      .when('/profile', {
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
      .otherwise({
        redirectTo: '/'
      });
  });
