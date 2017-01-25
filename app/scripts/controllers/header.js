'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:AboutCtrl
 * @description
 * # HeaderCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('HeaderCtrl', function ($routeParams, CategoriesService) {

  	// Fake list
    this.searchAutocompleteList = [
      {
      	"name": "Faire un feu sur une plage",
      	"id": 1234,
      	"type" : 1
      },
      {
      	"name": "Créer son habitat dans la jungle",
      	"id": 1235,
      	"type" : 1
      },
      {
      	"name": "Montagne",
      	"type" : 2
      },
      {
      	"name": "Jungle",
      	"type" : 2
      }
    ];

    // Categories list
    this.categoriesList = CategoriesService.getCategories();

    // Is view / Is active?
    this.isActiveCategoryView = function (category) {
    	return ($routeParams.name == category) ? true : false;
    };
  });
