//models/Course.js

import mongoose from 'mongoose';
var Schema = mongoose.Schema;

// New Schema
var courseSchema = new Schema({
  name: String,
  dateFrom: String,
  dateTo: String,
  description: String,
  courseStatus: String
}, { timestamps: true });


export default mongoose.model('Course', courseSchema);
