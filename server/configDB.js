const mongoose = require('mongoose');

mongoose.connect('mongodb://storatus:storatus12@ds247001.mlab.com:47001/final-education-app');


var db = mongoose.connection;



db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() { console.log("We are connected"); });


module.exports = db
