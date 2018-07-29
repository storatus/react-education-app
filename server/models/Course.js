//models/Course.js

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

// New Schema
var courseSchema = new Schema({
  name: String,
  dateFrom: String,
  dateTo: String,
  description: String,
  courseStatus: String,
  filePaths: [{
    fileName: String,
    path: String,
    clicks: Number
  }],
  videos: [{
    url: String,
    thumbnail: String,
    title: String,
    clicks: Number,
    youtubeId: String
  }],
  // members: [{    userId: {type: String, ref: 'User' }  }]
  members: [{
    userId: String
  }]


}, { timestamps: true, collection: 'courses' });

module.exports = mongoose.model('Course', courseSchema);
