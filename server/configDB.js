/**
 * configDB database - Database config
 * @module configDB
 */


const mongoose = require('mongoose');

mongoose.connect(''); // Here put the database you want to connect to. 


var db = mongoose.connection;

db.on('error', () => console.log('Error in connection'));
db.once('open', () =>  { console.log('connected'); });


module.exports = db
