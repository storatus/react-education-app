var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs');
var mongoose = require('mongoose')
var path = require('path')
var googleStorage = require('./../config')

const Course = require('./../models/Course')



// GET COURSES
router.get('/courses', (req, res) => {
  Course.find((err,data) => {
      if (err) { res.json(err) }
      res.json(data)
  })
});


// DELETE COURSE
router.delete('/delete/:courseId', (req, res) => {
  let courseId = req.params.courseId;
  Course.findOneAndDelete({ _id: courseId }, (err, data) => {
      // I also still have to delete from google buckets
      if (err) { res.json(err)}

      res.json(data)
  });
});



// DELETE FILE
router.delete('/deleteFile/:courseId/:fileId', (req, res) => {
  let courseId = req.params.courseId
  let fileId = req.params.fileId;


  Course.findById(courseId, (err, courseData) => {

        if (err) { res.json(err)}

        let files = courseData.filePaths
        let path = files.find(element => element._id == fileId).path


        googleStorage.storage.bucket(googleStorage.bucketName).file(path).delete().then(() => {
              Course.findByIdAndUpdate( courseId,
                { $pull: { "filePaths": { _id: fileId } } },{new: true},(err,data) => {
                      if (err) { res.json(err) }
                      res.json(data)
              });
        }).catch(err => console.log(err))

  });
});


// DELETE VIDEO
router.delete('/deleteVideo/:courseId/:videoId', (req, res) => {
  let courseId = req.params.courseId
  let videoId = req.params.videoId
  let youtubeId = req.params.youtubeId

  Course.findById(courseId, (err, courseData) => {
        if (err) { res.json(err) }

        Course.findByIdAndUpdate( courseId,
          { $pull: { "videos": { _id: videoId } } },{new: true},(err,data) => {
                if (err) {
                  res.json(err)
                  return;
                }
                res.send(data)
        });
  });
});




// GET SINGLE COURSE
router.get('/course/:courseId', (req, res) => {
  let courseId = req.params.courseId;

  Course.findById(courseId, (err, courseData) => {
        if (err) {
          res.status(500).send({error: 'Something failed'})
        }else{
            res.json(courseData)
        }
  });
});



// DONWLOAD FILE
router.get('/downloadFile/:downloadName', (req, res) => {
  let downloadName = req.params.downloadName
  let publicPath = `${__dirname}/../public/${downloadName}`
  let options = {
    destination: `./public/${downloadName}`
  }

  googleStorage.storage.bucket(googleStorage.bucketName).file(downloadName).download(options)
  .then(() => res.download(publicPath, downloadName))
  .catch(err => console.error('ERROR:', err));

});


// UPLOAD FILE
router.post("/upload", (req, res) => {

  var form = new formidable.IncomingForm();
  form.parse(req, (error,fields,files) => {
    let oldPath = files.file.path;
    let courseId = fields.courseId
    let newName = `${courseId}_${files.file.name}`



    Course.findById(courseId, (err,courseObj)=>{
       if (err){ res.end(err) }


       let filePaths = courseObj.filePaths
       let findName = filePaths.findIndex(element => element.path == newName)


       if (findName == -1) {
         googleStorage.storage.bucket(googleStorage.bucketName).upload(oldPath).then(data => {

           let fileName = data[0].name
           googleStorage.storage.bucket(googleStorage.bucketName).file(fileName).move(newName).then(() => {

             Course.findByIdAndUpdate(courseId,
               {"$push": { "filePaths": {fileName: files.file.name, path: newName}}} , {new: true}, (error,data) => {
               if (err){ res.end(err) }
               res.json(data)
             })

           })

         }).catch(err => console.error('ERROR:', err))

       }
    })


  })

});



// CREATE VIDEO
router.post('/uploadVideo', (req, res) => {
  let courseId = req.body.courseId
  let url = req.body.url
  let title = req.body.title
  let youtubeId = req.body.youtubeId
  let thumbnail = req.body.thumbnail

  Course.findById(courseId, (err,courseObj)=>{
    if (err){ res.end(err) }
     let videos = courseObj.videos
     let findUrl = videos.findIndex(element => element.title === title)

     if (findUrl == -1) {
       Course.findByIdAndUpdate(courseId,
         {"$push": { "videos": {title, url, youtubeId, thumbnail, clicks: 0}}} , {new: true},
         (error,data) => {
         if (err){ res.end(err) }
         res.send(data)
       })
     }
  })
});



// UPDATE COURSE
router.post("/update", (req, res) => {

  let obj = req.body;

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


// CREATE COURSE
router.post('/create', (req, res) => {

  const course = new Course();
  const obj = req.body;

  Object.keys(obj).forEach(key => {
    let value = obj[key]
    course[key] = value
  });

  course.save(error => {
    if(error){res.send(err)}
    res.send(course)
  })

});




// export default router
module.exports = router
