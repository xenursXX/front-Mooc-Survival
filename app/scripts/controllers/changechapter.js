'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('ChangeChapterCtrl', function ($resource, $routeParams, CoursesService, $location) {

    // NE pas oublier de get le numéro du chapitre
    this.chapterTitle = 'toto';
    tinymce.init({
      selector: 'textarea',  // change this value according to your HTML
      plugins: ["image link save emoticons code colorpicker fullscreen media"],
      height:400
    });
    this.UpdateData = function(){
      console.log('contenu du text editor',tinyMCE.activeEditor.getContent());
      console.log('Titre du chapitre', this.chapterTitle);
      //Envoie des datas en Put au back
    }
  });
