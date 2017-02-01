'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.services:UserService
 * @description
 * # UserService
 * Service of the frontMoocSurvivalApp
 */

angular.module("frontMoocSurvivalApp")
  .factory("UserService", function (Restangular) {

    this.userStatic = [
      {
        "courses": [
          {
            "author": {
                "id": 1,
                "username": "bob"
            },
            "category": {
                "id": 1,
                "name": "fire"
            },
            "comments": [],
            "content": "How to start a fire with green wood",
            "created_at": "25/01/17 - 08:59:53",
            "id": 1,
            "title": "Start a fire"
          },
          {
            "author": {
                "id": 1,
                "username": "bob"
            },
            "category": {
                "id": 1,
                "name": "fire"
            },
            "comments": [],
            "content": "Which mushrooms should i eat",
            "created_at": "25/01/17 - 08:59:53",
            "id": 2,
            "title": "Eat food"
          },
          {
            "author": {
                "id": 1,
                "username": "bob"
            },
            "category": {
                "id": 1,
                "name": "fire"
            },
            "comments": [],
            "content": "How to kill zombie with fire",
            "created_at": "25/01/17 - 08:59:53",
            "id": 3,
            "title": "I love u Baby"
          },
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

    this.loggedIn =  function (data, token) {
      localStorage.setItem('SurvivalUser', JSON.stringify(data));
      localStorage.setItem('SurvivalToken', token);

      Restangular.setDefaultHeaders({Authorization: 'JWT ' + token});
    }

    this.isConnected = function () {
      if(localStorage.getItem('SurvivalToken')) {
        return true;
      }
      return false;
    }

    this.getUserData = function () {
      return JSON.parse(localStorage.getItem('SurvivalUser'));
    }

    // this.logIn = function () {
    //   connected = true;
    // }

    this.logout = function () {
      localStorage.removeItem('SurvivalUser');
      localStorage.removeItem('SurvivalToken');
    }

	  return this;

  });
