var express = require('express');
var router = express.Router();
import mongoose from 'mongoose';

// Course in models
import Course from './models/Course';

//Create
router.get('/', (req, res) => {
  console.log("Kastanien aus dem Feuer");
  res.json("Kastanien aus dem Feuer");
});




router.get('/courses', (req, res) => {
  // Get data courses
  Course.find((err,data) => {
      if (err) { res.json(err)}
      res.json(data)
  })
});


router.get('/course/:courseId', (req, res) => {
  let courseId = req.params.courseId;

  // What happens if courseId was not found ?

  Course.findById(courseId, (err, courseData) => {
        if (err) { res.json(err)}
        res.json(courseData)
  });

});



router.post('/create', (req, res) => {

  console.log("I just created something");

  const course = new Course();
  const obj = req.body; // What i get

  // Assign all received data to course
  Object.keys(obj).forEach(key => {
    let value = obj[key]
    course[key] = value
  });


  // Always think of testing
  course.save(error => {
    if(error){}
    res.send(course)

    return

  })





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
