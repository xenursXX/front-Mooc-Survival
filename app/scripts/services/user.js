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

    this.userStatic = [
      {
        "comments":[],
        "courses": [
          {"tata":"tyutu"},
          {"tata":"tyutu"}
        ],
        "id": 1,
        "username": "bob",
        "role":"instructor",
        "email":"test@test.com",
        "photo":"https://pbs.twimg.com/profile_images/495247940336627712/NooYyU9V.jpeg",
        "birthday":"13/12/1995",
        "created_at":"10/01/2017",
        "firstname":"Fab",
        "lastname":"LeRoux",
        "badges":[
          {
          "name":"jungle1",
          "id":"1"
          },
          {
          "name":"zombie2",
          "id":"2"
          }
        ]
      }
    ];
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
