'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.services:CategoriesService
 * @description
 * # CategoriesService
 * Service of the frontMoocSurvivalApp
 */

angular.module("frontMoocSurvivalApp")
  .factory("CategoriesService", function ($http,$q) {

    var cat = [
    {
      'category_name': 'forest',
      'id': 1
    },
    {
      'category_name': 'desert',
      'id': 2
    },
    {
      'category_name': 'jungle',
      'id': 3
    },
    {
      'category_name': 'mountain',
      'id': 4
    },
    {
      'category_name': 'mars',
      'id': 5
    }
  ];




    this.getCategories = function () {
      return cat;
    }

    this.getCategoryName = function (cat_id) {
      var m = "";

      for (var index in cat) {
          if (cat.hasOwnProperty(index)) {
              if(cat[index].id == cat_id){
                  m = cat[index].category_name;
              }
          }
      }

      return m;
    }

	  return this;
  });
