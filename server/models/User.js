/**
 * User module - Ref: From mongoose docs https://goo.gl/szRMTi
 * @module User
 */

var mongoose = require('mongoose')
var Schema = mongoose.Schema;


let userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  role: Number
}, { timestamps: true, collection: 'users' });

module.exports = mongoose.model('User', userSchema);
