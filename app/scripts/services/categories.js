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

	  var cat = [];

    var toto = function () {
      $http({
        method: 'GET',
        url: 'http://localhost:5555/categories'
      }).then(function successCallback(response) {
        console.log(response.data.categories)
        cat.push(response.data.categories) ;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    }

    toto();


    this.getCategories = function () {
      return cat[0];
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
