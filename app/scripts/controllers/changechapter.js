'use strict';

/**
 * @ngdoc function
 * @name frontMoocSurvivalApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontMoocSurvivalApp
 */
angular.module('frontMoocSurvivalApp')
  .controller('ChangeChapterCtrl', function ($scope, $resource, $routeParams, CoursesService, UserService, $location, Restangular) {
    var idUser = UserService.getUserData().id;
    var idCourse = $routeParams.idcourse;
    var idChapter = $routeParams.idchapter;
    var token = localStorage.getItem('token');
    var getChapter = Restangular.one('courses',idCourse).one('chapters',idChapter).get({}, { Authorization: 'JWT ' + token });
    var putChapter = Restangular.one('courses',idCourse).one('chapters',idChapter);

    getChapter.then(function(data){
      console.log(data.plain());
      $scope.content = data.plain().content;
      $scope.chapterTitle = data.plain().titre;
    })
console.log('tinymce',tinymce);
    // NE pas oublier de get le numéro du chapitre
    // $scope.$on('$destroy', function() {
    //   var tinyInstance = tinymce.get('#tinymce');
    // 
    //   if (tinyInstance) {
    //     tinyInstance.remove();
    //     tinyInstance = null;
    //   }
    // });
    tinymce.init({
      selector: 'textarea',  // change this value according to your HTML
      plugins: ["image link save emoticons code colorpicker fullscreen media"],
      height:400
    });
    this.UpdateData = function(){
      console.log('contenu du text editor',tinyMCE.activeEditor.getContent());
      console.log('Titre du chapitre', this.chapterTitle);
      putChapter.put({title:this.chapterTitle, content:tinyMCE.activeEditor.getContent(),number:1},{ Authorization: 'JWT ' + token })
      //Envoie des datas en Put au back et on renvoie vers la page du cours du question ( #/course/{{idducours}})
       $location.path('/profile/' + idUser);
    }


  });
