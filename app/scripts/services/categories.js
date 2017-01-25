'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.services:CategoriesService
 * @description
 * # CategoriesService
 * Service of the frontMoocSurvivalApp
 */

angular.module("frontMoocSurvivalApp")
  .factory("CategoriesService", function () {

	  var cat = [
        'montagne',
        'forest',
        'apocalypse',
        'desert',
        'jungle'
      ];

      this.getCategories = function () {
        return cat;
      }

	  return this;
  });