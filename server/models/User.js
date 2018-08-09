
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

// New Schema
// 0 is for student - 1 for admin
let userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  role: Number
}, { timestamps: true, collection: 'users' });

module.exports = mongoose.model('User', userSchema);
