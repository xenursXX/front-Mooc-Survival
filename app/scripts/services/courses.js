'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.services:CoursesService
 * @description
 * # CoursesService
 * Service of the frontMoocSurvivalApp
 */

angular.module("frontMoocSurvivalApp")
  .factory("CoursesService", function () {

      /******* @TODO : CRUD Course ******/

      var courses = [
        {
          "author": {
            "id": 1, 
            "username": "Benjamin"
          }, 
          "category": {
            "id": 1, 
            "name": "montagne"
          }, 
          "comments": [], 
          "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro hic voluptatum, deleniti accusamus ipsum saepe quasi quia omnis sint, veritatis aspernatur facilis, aut suscipit maxime sed, optio nam minus eos.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ut, temporibus accusantium repellendus eaque voluptas nostrum non quae sapiente, minus voluptatibus iste suscipit necessitatibus velit cum omnis ex ipsam culpa.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa odit aliquam quibusdam alias in quas debitis, mollitia atque perspiciatis reprehenderit veritatis similique delectus hic at fugiat, quod qui aut fuga.", 
          "created_at": "25/01/17 - 08:59:53", 
          "id": 1, 
          "title": "Survivre lors d'une avalanche"
        },
        {
          "author": {
            "id": 2, 
            "username": "Guillaume"
          }, 
          "category": {
            "id": 2, 
            "name": "apocalypse"
          }, 
          "comments": [], 
          "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis qui molestiae, beatae ex natus dolore voluptates magni molestias suscipit ipsa, voluptatum quam error porro atque doloribus repudiandae modi sit nam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, odit, eos? Aliquid ut nesciunt ab est maxime totam veritatis voluptatem obcaecati. Natus quis placeat, consequatur magnam quasi maxime soluta possimus.", 
          "created_at": "25/01/17 - 08:59:53", 
          "id": 2, 
          "title": "Préparer ses armes"
        },
        {
          "author": {
            "id": 3, 
            "username": "Elodie"
          }, 
          "category": {
            "id": 3, 
            "name": "desert"
          }, 
          "comments": [], 
          "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum corrupti impedit facere hic, beatae, culpa id consequatur quasi quibusdam aut ullam voluptates quae perferendis delectus. Quas, ab maxime nostrum amet.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem aspernatur recusandae doloribus nihil! Natus numquam ipsa vitae provident qui quam similique odit quia sunt ratione. Tempora totam, eligendi tempore eum!", 
          "created_at": "25/01/17 - 08:59:53", 
          "id": 3, 
          "title": "Avoir de l'eau"
        },
        {
          "author": {
            "id": 4, 
            "username": "Fab"
          }, 
          "category": {
            "id": 4, 
            "name": "foret"
          }, 
          "comments": [], 
          "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, mollitia error dolore eaque doloribus tempora eum harum, amet sunt nemo voluptatibus magnam voluptate, adipisci obcaecati repellat at deserunt laudantium accusantium.", 
          "created_at": "25/01/17 - 08:59:53", 
          "id": 4, 
          "title": "Grimper aux arbres"
        }
      ];

      this.getCourses = function () {
        return courses;
      }

      this.getCoursesCategory = function (cat_id) {
        var m = [];
        for (var index in courses) {
            if (courses.hasOwnProperty(index)) {
                if(courses[index].category.id == cat_id){
                    m.push(courses[index]);
                }
            }
        }   
        return m;
      }

      return this;
  });