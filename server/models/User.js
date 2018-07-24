
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

// New Schema
var courseSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
}, { timestamps: true, collection: 'users' });

module.exports = mongoose.model('User', courseSchema);
