
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

// New Schema
var courseSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  role: Number // 0 is for student / 1 for admin
}, { timestamps: true, collection: 'users' });

module.exports = mongoose.model('User', courseSchema);
