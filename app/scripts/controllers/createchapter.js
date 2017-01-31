'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:CreateCourseCtrl
 * @description
 * # CreateCourseCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('CreateChapterCtrl', function ($resource, $routeParams, CoursesService, $location) {

    //GET Course before anything && display chapter+1



    this.arrayQuestions = [1,2];
    this.displayQuestion = true;


    this.addChapters = function(){
      if(tinyMCE.activeEditor.getContent() !== null && tinyMCE.activeEditor.getContent() !== "" && this.chapterTitle !== null){
        //envoyer les donnée au back && reload state
        console.log('requete à faire');
      }

    }
    this.addQuestion = function(){
      this.arrayQuestions.push(+1);
      if(this.arrayQuestions.length > 19){
        this.displayQuestion = false;
      }
    }
    tinymce.init({
      selector: 'textarea',  // change this value according to your HTML
      plugins: ["image link save emoticons code colorpicker fullscreen media"],
      height:400
    });
    this.getData = function(){
      console.log('getChapterTitle', this.chapterTitle);
      console.log(tinyMCE.activeEditor.getContent());
    }
    var SendDataForm = [];
    this.submited = function(dataForm, index){
      SendDataForm.push(dataForm);
      console.log('SendDataForm',dataForm);
    }
  }
);
