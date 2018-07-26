const mongoose = require('mongoose');

mongoose.connect('mongodb://storatus:storatus12@ds247670.mlab.com:47670/expense-manager');
var db = mongoose.connection;



db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() { console.log("We are connected"); });


module.exports = db
