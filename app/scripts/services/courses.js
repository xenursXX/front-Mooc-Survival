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
          "comments": [
            {
              "id" : 1,
              "title" : "Ici mon premier commentaire",
              "date"   :"20-01-2017",
              "userName" : "Guillaume",
              "stars" : "2",
              "content" : "toto c'est moi qui a cramé la poile"
            },
            {
              "id" : 2,
              "title" : "EASY TWIG",
              "date"   :"17-01-2017",
              "userName" : "Trump le gros ***",
              "stars" : "1",
              "content" : "J'ai déjà nettoyé l'OBAMACARE"
            },
            {
              "id" : 3,
              "title" : "Comm commm Common",
              "date"   :"21-01-2017",
              "userName" : "quetzalcoatl",
              "stars" : "4",
              "content" : "Je suis le dieux maya un peu trop stylé"
            }
          ], 
          "content": {
            "summary" : " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, tempora dolore officiis quo sed rem cumque sapiente, doloribus modi, dolor aut nihil fugit corrupti porro! Nulla iure corporis explicabo ipsam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ducimus quas tempore, officiis aut voluptatum, accusamus possimus pariatur labore at laudantium odio blanditiis nam, facilis iure tenetur ex ullam minus?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, aspernatur numquam. Ullam asperiores eos magni id repellendus quidem et ducimus totam. Nam harum unde excepturi doloremque minima adipisci, ducimus quam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia veniam suscipit voluptatibus magnam eum sit quasi laborum aliquid incidunt accusantium, rem delectus vel modi ut, inventore deserunt. Recusandae, illum laudantium.",
            "image_url" : "url de l'image",
            "steps" : [
              {
                "type" : 1, // cours
                "title" : "le titre de ce step",
                "content" : "le contenu du step 1",
              },
              {
                "type" : 2, // quizz
                "title" : "le titre du quizz",
                "quizz" : [
                  {
                    "id" : 1,
                    "question" : "la question",
                    "responses" : [
                      {
                        "content" : "loredjezidjeizodioezjaiodez",
                        "good" : true
                      },
                      {
                        "content" : "loredjezidjeizodioezjaiodez",
                        "good" : false
                      },
                      {
                        "content" : "loredjezidjeizodioezjaiodez",
                        "good" : false
                      },
                      {
                        "content" : "loredjezidjeizodioezjaiodez",
                        "good" : false
                      }
                    ]
                  },
                  {
                    "id" : 2,
                    "question" : "la question numéro 2",
                    "responses" : [
                      {
                        "content" : "loredjezidjeizodioezjaiodez",
                        "good" : true
                      },
                      {
                        "content" : "loredjezidjeizodioezjaiodez",
                        "good" : false
                      },
                      {
                        "content" : "loredjezidjeizodioezjaiodez",
                        "good" : false
                      },
                      {
                        "content" : "loredjezidjeizodioezjaiodez",
                        "good" : false
                      }
                    ]
                  }
                ],
              }
            ],
          }, 
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

      this.getCourse = function (id) {
        for (var index in courses) {
            if (courses.hasOwnProperty(index)) {
                if(courses[index].category.id == id){
                    return courses[index];
                    break;
                }
            }
        }   
      }

      return this;
  });