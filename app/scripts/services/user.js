'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.services:UserService
 * @description
 * # UserService
 * Service of the frontMoocSurvivalApp
 */

angular.module("frontMoocSurvivalApp")
  .factory("UserService", function () {

    var user = [];
    var connected = false;

    this.isConnected = function () {
      return connected;
    }

    this.logIn = function () {
      connected = true;
    }

    this.logOut = function () {
      connected = false;
    }

	  return this;

  });