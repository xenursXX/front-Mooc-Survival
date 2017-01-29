'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:CreateCourseCtrl
 * @description
 * # CreateCourseCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('CreateCourseCtrl', function ($resource, $routeParams, CoursesService, $location, FileUploader) {

    this.uploader = new FileUploader();

    tinymce.init({
      selector: 'textarea',  // change this value according to your HTML
      plugins: ["image link save emoticons code colorpicker fullscreen media"],
      height:400
    });
    this.getData = function(){
      console.log('toto',tinyMCE);
      console.log(tinyMCE.activeEditor.getContent());
    }
    var SendDataForm = [];
    this.submited = function(dataForm, index){
      SendDataForm.push(dataForm);
      console.log('SendDataForm',dataForm);
    }


  }
);
