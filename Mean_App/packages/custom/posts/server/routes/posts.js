(function () {
  'use strict';

  /* jshint -W098 */
  // The Package is past automatically as first parameter
  module.exports = function (Posts, app, auth, database) {

    // Post routes use posts controller
    var posts = require('../controllers/posts')(Posts);



    app.route('/api/posts')
     .get(posts.index)
     .post(posts.create)
    
    app.route('/api/posts/:postId')
     .get(posts.show)
     .put(posts.update)
     .delete(posts.destroy);


    // Finish with setting up the articleId param
    app.param('postId', posts.post);

    // app.get('/api/posts', auth.requiresLogin, function (req, res, next) {
    //   res.send('Only authenticated users can access this');
    // });

    // app.post('/api/posts', auth.requiresLogin, function (req, res, next) {
    //   res.send('Only authenticated users can access this');
    // });

    // app.get('/api/posts/:id', auth.requiresLogin, function (req, res, next) {
    //   res.send('Only authenticated users can access this');
    // });

    // app.get('/api/posts/example/admin', auth.requiresAdmin, function (req, res, next) {
    //   res.send('Only users with Admin role can access this');
    // });

    // app.get('/api/posts/example/render', function (req, res, next) {
    //   Posts.render('index', {
    //     package: 'posts'
    //   }, function (err, html) {
    //     //Rendering a view from the Package server/views
    //     res.send(html);
    //   });
    // });
  };
})();
