/**
 * configDB database - Database config
 * @module configDB
 */


const mongoose = require('mongoose');

mongoose.connect('mongodb://storatus:storatus12@ds247001.mlab.com:47001/final-education-app');


var db = mongoose.connection;

db.on('error', () => console.log('Error in connection'));
db.once('open', () =>  { console.log('connected'); });


module.exports = db
