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

    this.arrayQuestions = [1,2];
    this.displayQuestion = true;
    this.chapters = [1,2];

    this.addChapters = function(){
      this.chapters.push(+1);
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
      console.log('toto',tinyMCE);
      console.log(tinyMCE.activeEditor.getContent());
      $resource('http://localhost:5555/courses')
      .save()
      .$promise
      .then()
    }
    var SendDataForm = [];
    this.submited = function(dataForm, index){
      SendDataForm.push(dataForm);
      console.log('SendDataForm',dataForm);
    }
  }
);