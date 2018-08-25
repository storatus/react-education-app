/**
 * Course module - Ref: From mongoose docs https://goo.gl/szRMTi
 * @module Course
 */


var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var courseSchema = new Schema({
  name: String,
  dateFrom: String,
  dateTo: String,
  description: String,
  courseStatus: String,
  filePaths: [{
    fileName: String,
    path: String,
    clicks: [String]
  }],
  videos: [{
    url: String,
    thumbnail: String,
    title: String,
    clicks: [String],
    youtubeId: String
  }],
  members: [{
    userId: String
  }]


}, { timestamps: true, collection: 'courses' });

module.exports = mongoose.model('Course', courseSchema);
