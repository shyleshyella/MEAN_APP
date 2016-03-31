'use strict';

/**
 * Module dependencies.
 */
var mongoose  = require('mongoose'),
  Schema    = mongoose.Schema,
  // crypto    = require('crypto'),
  // ObjectId = Schema.ObjectId,
  _   = require('lodash');

/**
 * Validations
 */
var validatePresenceOf = function(value) {
  // If you are authenticating by any of the oauth strategies, don't validate.
  return (this.description && this.provider !== 'local') || (value && value.length);
};

/**
 * Getter
 */
var escapeProperty = function(value) {
  return _.escape(value);
};

/**
 * Post Schema
 */

var PostSchema = new Schema({
  name: {
    type: String,
    required: true,
    get: escapeProperty
  },
  time: {
    type: String,
    required: true,
    get: escapeProperty
  },
  image: {
    type: String,
    required: true,
    get: escapeProperty
  },

  description: {
    type: String,
    required: true,
    get: escapeProperty
  },
  condition: {
    type: String,
    required: true,
    get: escapeProperty
  },
  transmission: {
    type: String,
    required: true,
    get: escapeProperty
  },
  kbb: {
    type: String,
    required: true
  }
});

PostSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).exec(cb);
};

console.log("mongoose model post")
mongoose.model('Post', PostSchema);
