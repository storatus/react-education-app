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

router.delete('/delete/:courseId', (req, res) => {

  let courseId = req.params.courseId;
  Course.remove({ _id: courseId }, (err, data) => {
      // I also need to define error message
      // console.log(data);
      if (err) {
        res.json(err)
        return;
      }
      res.json({status: true})
  });

});






router.get('/course/:courseId', (req, res) => {
  let courseId = req.params.courseId;
  // What happens if courseId was not found ?
  Course.findById(courseId, (err, courseData) => {
        if (err) {
          res.json(err)
          return; 
        }
        res.json(courseData)
  });

});



router.post("/update", (req, res) => {

  const obj = req.body;

  Course.findByIdAndUpdate(obj._id,{
    name: obj.name,
    dateFrom: obj.dateFrom,
    dateTo: obj.dateTo,
    description: obj.description,
    courseStatus: obj.courseStatus
  },
  {new: true},(err,dbRes) => {
    res.send(dbRes)
  })

});



router.post('/create', (req, res) => {


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


});




export default router
