'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Post = mongoose.model('Post'),
  async = require('async'),
  config = require('meanio').loadConfig(),
  crypto = require('crypto'),
  nodemailer = require('nodemailer'),
  _ = require('lodash'),
  jwt = require('jsonwebtoken'); //https://npmjs.org/package/node-jsonwebtoken


module.exports = function(MeanPost) {
    return {
        post: function(req, res, next, id) {
            console.log(id)
            Post.load(id, function(err, post) {
                if (err) return next(err);
                if (!post) return next(new Error('Failed to load post ' + id));
                req.post = post;
                next();
            });
        }, 
        /**
         * Retrieve list of posts by seller
         */
        index: function(req, res, next) {
            Post.find({}, function(err, posts){
                res.status(200).send(posts);
            })
        },
        /**
         * Retrieve list of posts by seller
         */
        show: function(req, res, next) {
          res.status(200).send(req.post);
        }, 
        /**
         * Delete the post
         */
        destroy: function(req, res, next) {
          var post = req.post; 
          //console.log(req.post.name);         
          post.remove();
          res.json(post);          
        },      

        /**
         * Update post
         */
        update: function(req, res, next) {
          var post = req.post;
          post = _.extend(post, req.body);
          post.save()
          res.json(post);
        },
         
        /**
         * Create user
         */
        create: function(req, res, next) {
            //var Post = mongoose.model('Post');
            console.log(Post); 
            var post = new Post(req.body);

            post.status = 'draft';
            post.seller = 1;
            // req.assert('title', 'You must enter a name').notEmpty();
            // req.assert('description', 'You must enter a description').notEmpty();
            // req.assert('categories', 'You must enter a category').notEmpty();
            // req.assert('categories', 'You must enter a category').notEmpty();
            // req.assert('confirmPassword', 'Passwords do not match').equals(req.body.password);

            // var errors = req.validationErrors();
            // if (errors) {
            //     return res.status(400).send(errors);
            // }

            post.save(function(err) {
                res.status(200).send(post);
            });
        }
    };
}

