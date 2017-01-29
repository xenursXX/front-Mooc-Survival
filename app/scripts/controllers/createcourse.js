'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:CreateCourseCtrl
 * @description
 * # CreateCourseCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('CreateCourseCtrl', function ($resource, $routeParams, CoursesService, $location) {
    tinymce.init({
      selector: 'textarea',  // change this value according to your HTML
      plugins: ["image link save emoticons code colorpicker fullscreen media"],
      height:400
    });
    this.getData = function(){
      console.log('toto',tinyMCE);
      console.log(tinyMCE.activeEditor.getContent());
    }
    this.reps = [
      {name:"q1", checked:false},
      {name:"q2", checked:false},
      {name:"q3", checked:false},
      {name:"q4", checked:false}
    ]
    this.submited = function(dataForm){
      console.log('dataForm',dataForm);
    }

  }
);
