var express = require('express');
var router = express.Router();

// Course in models
import Course from './models/Course';

//Create
router.get('/something', (req, res) => {
  res.json("vrbnvlernbln");
});




router.post('/create', (req, res) => {
  const course = new Course();

  // // body parser lets us use the req.body
  const { author, text } = req.body;

  console.log(author);



  // if (!author || !text) {
  //   // we should throw an error. we can do this check on the front end
  //   return res.json({
  //     success: false,
  //     error: 'You must provide an author and comment'
  //   });
  // }
  // comment.author = author;
  // comment.text = text;
  // comment.save(err => {
  //   if (err) return res.json({ success: false, error: err });
  //   return res.json({ success: true });
  // });
});




export default router
