(function () {
  'use strict';

  /* jshint -W098 */
  angular
    .module('mean.posts')
    .controller('PostsController', PostsController);

  PostsController.$inject = ['$scope', 'Global', 'Posts', '$http','$stateParams'];

  function PostsController($scope, Global, Posts, $http, $stateParams) {
    $scope.global = Global;
    $scope.package = {
      name: 'posts'
    };
     $scope.default_posts = Posts.default();
     $scope.posts = [];

    $scope.post = '';
    
    
    
    $scope.getPostsList = function()
    {
          Posts.list($scope.default_posts)
          .then(function(response){
      
      console.log(response);
      $scope.posts = response.data;
    });
    };

     $scope.getPost = function() {
      console.log('getPost');
      Posts.get($stateParams.postId, $scope.default_posts)
          .then(function(response){
            console.log(response);
           $scope.post = response.data;
      });

    };
        $scope.deletePost = function() {
      Posts.destroy($stateParams.postId, $scope.default_posts)
          .then(function(response){
            console.log(response);
           $scope.post = response.data;
      });
            
    };

     $scope.updatePost = function() {
      Posts.update($stateParams.postId, $scope.default_posts)
          .then(function(response){
            console.log(response);
           $scope.post = response.data;
      });
            
    };

  }

})();

// angular
//     .module('mean.posts')
//     .controller('PostsController', ['$scope', 'Global', 'Posts', function($scope, Global, Posts){

//       $scope.global = Global;
//     $scope.package = {
//       name: 'posts'
//     };
//     $scope.init = function() {
//       $scope.posts = []
//       Posts.list.then(function(response) {
//         console.log("hi");
//         console.log('response', response);
//         $scope.posts = response;
//       })
//     };
    

//   //   $scope.currentCarInfo = {

//   //     "id" : "1",
//   // "name": "2010 Toyota 4Runner - $15000",
//   // "time" : "Posted: a day ago",
//   // "Image" : "/posts/assets/img/car1.jpg",
//   // "Item Description" : "2010 Toyota 4Runner which is well maintained and clean.",
//   // "Condition" : "Excellent",
//   // "Transmission" : "Automatic",
//   // "KBB" : "$13000"

//   //   };

//     }]);