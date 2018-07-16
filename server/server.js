const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
var router = require('./routes')
// import router from './routes'
var path = require('path')

// // and create our instances
const app = express();



// This was 3001
const port = process.env.API_PORT || 3001;


// connect with mongoose --> why ?
mongoose.connect('mongodb://storatus:storatus12@ds247670.mlab.com:47670/expense-manager');
var db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() { console.log("We are connected"); });



//What is bodyParser --> I need to clarify this
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));


app.use(express.static(path.join(__dirname, '/../client/build')));

app.use('/api', router);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/../client/build', 'index.html'));
});


// // Use our router configuration when we call /api
app.listen(port, () => console.log(`Listening on port ${port}`));
