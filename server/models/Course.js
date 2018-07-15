//models/Course.js

import mongoose from 'mongoose';
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
    title: String,
    clicks: Number,
    youtubeId: String
  }]
}, { timestamps: true, collection: 'courses' });


export default mongoose.model('Course', courseSchema);
