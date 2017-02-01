'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:CreateCourseCtrl
 * @description
 * # CreateCourseCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('CreateChapterCtrl', function ($scope, $resource, $routeParams, CoursesService, $location, Restangular, UserService) {

    //GET Course before anything && display chapter+1

    var idCourse = $routeParams.idcourse;
    var token = localStorage.getItem('token');
    var idUser = UserService.getUserData().id;
    var addchapter = Restangular.one('courses',$routeParams.idcourse).all('chapters');
    var chapter = Restangular.one('courses',$routeParams.idcourse).get({}, { Authorization: 'JWT ' + token });
    this.error = false;
    this.courseId = $routeParams.idcourse;

    chapter.then(function(data){
      console.log('datass', data.plain().chapters.length+1);
      $scope.chapterNumber = data.plain().chapters.length+1;
      $scope.NextchapterNumber = data.plain().chapters.length+2;
    })
    this.arrayQuestions = [1,2];
    this.displayQuestion = true;

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
      if(tinyMCE.activeEditor.getContent() == null || tinyMCE.activeEditor.getContent() == "" || this.chapterTitle == null){
        this.error = true;

      }else{
        this.error = false;
        $location.path('/createquizz/' + idCourse);
        addchapter.post(
          {
            title: this.chapterTitle,
            number:1,
            content:tinyMCE.activeEditor.getContent()
          },
            {
              Authorization: 'JWT ' + token
             }
        )
      }
    }
    var SendDataForm = [];
    this.submited = function(dataForm, index){
      SendDataForm.push(dataForm);
      console.log('SendDataForm',dataForm);
    }
  }
);
