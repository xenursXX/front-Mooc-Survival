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
    var connected = false;
    var token     = null;

    this.loggedIn =  function (token) {
      connected = true;
      token     = token;
    }

    this.isConnected = function () {
      return connected;
    }

    this.getToken = function () {
      return token;
    }

    this.logIn = function () {
      connected = true;
    }

    this.logOut = function () {
      connected = false;
    }

	  return this;

  });
