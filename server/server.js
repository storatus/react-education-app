const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path')
const app = express();
const db = require('./configDB')



var course = require('./routes/course')
var user = require('./routes/user')








//What is bodyParser --> I need to clarify this
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));



app.use('/api', course);
app.use('/api/user', user);




if (process.env.NODE_ENV == 'production') {
  app.use(express.static(path.join(__dirname, '/../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/../client/build', 'index.html'));
  });
}




// // Use our router configuration when we call /api
app.listen(process.env.PORT || 3001);
