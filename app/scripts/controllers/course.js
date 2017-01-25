'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:AboutCtrl
 * @description
 * # CourseCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('CourseCtrl', function ($resource,$routeParams,$scope) {
    var courseId = $routeParams.id;
    console.log(courseId);

    // send le rating vers le back

    this.update = function(commentForm){
      console.log('comment', commentForm);
      console.log('this', this);
      commentForm.stars = this.stars;
      commentForm.date = new Date();
      this.Comment.push(commentForm);
      this.form = {};
    }

    this.reset = function(){
      this.form = {};
    }

    this.Comment = [
      {
        title:"Ici mon premier commentaire",
        date :"20-01-2017",
        userName:"Guillaume",
        stars:"2",
        content:"toto c'est moi qui a cramé la poile"
      },
      {
        title:"EASY TWIG",
        date :"17-01-2017",
        userName:"Trump le gros ***",
        stars:"1",
        content:"J'ai déjà nettoyé l'OBAMACARE"
      },
      {
        title:"Comm commm Common",
        date :"21-01-2017",
        userName:"quetzalcoatl",
        stars:"4",
        content:"Je suis le dieux maya un peu trop stylé"
      }
    ]

  }
);
