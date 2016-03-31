(function () {
  'use strict';

  angular
    .module('mean.posts')
    .config(posts);

  posts.$inject = ['$stateProvider'];

  function posts($stateProvider) {
    $stateProvider
    .state('posts', {
      url: '/posts',
      templateUrl: 'posts/views/list.html'
    }) 
    .state('post_detail', {
      url: '/posts/:postId',
      templateUrl: 'posts/views/show.html'
    })
    .state('post_delete', {
      url: '/posts/:postId/delete',
      templateUrl: 'posts/views/delete.html'
    })
    .state('post_edit', {
        url: '/posts/:postId/edit',
        templateUrl: '/posts/views/edit.html',
      })  
    ;
  }

})();