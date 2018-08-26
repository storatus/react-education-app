/**
 * server
 * @module server
 */


const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path')
const app = express();
const db = require('./configDB')



var course = require('./routes/course')
var user = require('./routes/user')




// Examples taken from https://goo.gl/ZGizec
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));



app.use('/api/course', course);
app.use('/api/user', user);

// Examples taken from Express.js file https://goo.gl/VYU9fs
if (process.env.NODE_ENV == 'production') {
  app.use(express.static(path.join(__dirname, '/../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/../client/build', 'index.html'));
  });
}




app.listen(process.env.PORT || 3001);
