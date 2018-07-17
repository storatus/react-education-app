const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
var router = require('./routes')
var path = require('path')

// Create app instance
const app = express();


mongoose.connect('mongodb://storatus:storatus12@ds247670.mlab.com:47670/expense-manager');
var db = mongoose.connection;

// REWRITE
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() { console.log("We are connected"); });


//What is bodyParser --> I need to clarify this
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));



app.use('/api', router);

if (process.env.NODE_ENV == 'production') {
  app.use(express.static(path.join(__dirname, '/../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/../client/build', 'index.html'));
  });
}




// // Use our router configuration when we call /api
app.listen(process.env.PORT || 3001);
