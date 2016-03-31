//(function () {
  'use strict';

  angular
    .module('mean.posts')
    .factory('Posts', ['$http',function($http){
    // .factory('Posts', Posts);

  //Posts.$inject = ['$http'];

  //function Posts() {
    var get_default = function(){
      return({
        list: [],
        single: {}
      })
    }

    var list = function(posts) {
      console.log('list........');
      return ($http.get('/api/posts').success(function(response){
        posts.list = response;
      }).error(function(response){

      }));
    }

    var get_post = function(id, posts) {
      return ($http.get('/api/posts/'+id).success(function(response){
        console.log("heee")
        //posts.list = response;
        posts.single = response;
      }).error(function(response){

      }));
    }

    var create_post = function(posts) {
      $http.post('/api/posts', posts.single).success(function(response){
        posts.single = response;
      }).error(function(response){

      });
    }
    
    var update_post = function(posts) {
      return($http.post('/api/posts/' +id).success(function(response){
        posts.single = response;
      }).error(function(response){

      }));
    }

    var destroy_post = function(id,posts) {
      console.log('destroy_post');
      return($http.delete('/api/posts/' +id).success(function(response){
        console.log(response)
        console.log("hey");
        posts.single = response;
        get_post(posts);
      }).error(function(response){

      }));
    }
    return {
      default: get_default,
      list: list,
      get: get_post,
      create: create_post,
      update: update_post,
      destroy: destroy_post
    };
  }
//})();
]);
