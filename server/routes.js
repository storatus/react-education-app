var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs');
import mongoose from 'mongoose';
import Course from './models/Course';




// GET COURSES
router.get('/courses', (req, res) => {
  Course.find((err,data) => {
      if (err) { res.json(err)}
      res.json(data)
  })
});


// DELETE COURSE
router.delete('/delete/:courseId', (req, res) => {
  let courseId = req.params.courseId;
  Course.findOneAndDelete({ _id: courseId }, (err, data) => {
      if (err) {
        res.json(err)
        return;
      }

      let files = data.filePaths;
      files.forEach((element) => {
        fs.unlink(element.path, (err) => {
            if (err) {
              res.json(err)
              return
            }
        })
      })
      res.json({status: true})
  });
});



// DELETE FILE
router.delete('/deleteFile/:courseId/:fileId', (req, res) => {
  let courseId = req.params.courseId
  let fileId = req.params.fileId;

  Course.findById(courseId, (err, courseData) => {
        if (err) {
          res.json(err)
          return;
        }
        let files = courseData.filePaths
        let path = files.find(element => element._id == fileId).path
        fs.unlink(path, (err) => {
            if (err) {
              res.json(err)
              return
            }
            Course.findByIdAndUpdate( courseId,
              { $pull: { "filePaths": { _id: fileId } } },{new: true},(err,data) => {
                    if (err) {
                      res.json(err)
                      return;
                    }
                    res.json({data})
            });
        })
  });
});


// DELETE VIDEO
router.delete('/deleteVideo/:courseId/:videoId', (req, res) => {
  let courseId = req.params.courseId
  let videoId = req.params.videoId
  let youtubeId = req.params.youtubeId

  Course.findById(courseId, (err, courseData) => {
        if (err) {
          res.json(err)
          return;
        }

        Course.findByIdAndUpdate( courseId,
          { $pull: { "videos": { _id: videoId } } },{new: true},(err,data) => {
                if (err) {
                  res.json(err)
                  return;
                }
                res.send({
                  message: 'Video deleted',
                  status:true
                })
        });
  });
});




// GET SINGLE COURSE
router.get('/course/:courseId', (req, res) => {
  let courseId = req.params.courseId;
  Course.findById(courseId, (err, courseData) => {
        if (err) {
          res.json(err)
          return;
        }
        res.json(courseData)
  });
});


// DONWLOAD FILE
router.get('/downloadFile/:downloadName', (req, res) => {

  let downloadName = req.params.downloadName
  let publicPath = `${__dirname}/public/${downloadName}`
  res.download(publicPath, downloadName)

});


// UPLOAD FILE
router.post("/upload", (req, res) => {

  var form = new formidable.IncomingForm();
  form.parse(req, (error,fields,files) => {
    let oldPath = files.file.path;
    let courseId = fields.courseId
    let newPath = `${__dirname}/public/${courseId}_${files.file.name}`

    fs.rename(oldPath, newPath, (err) => {
         if (err){ res.end(err) }

         Course.findById(courseId, (err,courseObj)=>{
            if (err){ res.end(err) }

            let filePaths = courseObj.filePaths
            let findPath = filePaths.findIndex(element => element.path == newPath)

            if (findPath == -1) {
              Course.findByIdAndUpdate(courseId,
                {"$push": { "filePaths": {fileName: files.file.name, path: newPath}}} , {new: true}, (error,data) => {
                if (err){ res.end(err) }
                res.json({message: 'Material uploaded',status:true})
              })
            }else{
              res.json({message: 'Material has been already uploaded',status:false} )
            }
         })
     });
  })

});



// CREATE VIDEO
router.post('/createVideo', (req, res) => {
  let courseId = req.body.courseId
  let url = req.body.url
  let title = req.body.title
  let youtubeId = req.body.youtubeId


  Course.findById(courseId, (err,courseObj)=>{
    if (err){ res.end(err) }
     let videos = courseObj.videos
     let findUrl = videos.findIndex(element => element.title === title)

     if (findUrl == -1) {
       Course.findByIdAndUpdate(courseId,
         {"$push": { "videos": {title: title, url: url, youtubeId, clicks: 0}}} ,
         {new: true},
         (error,data) => {
         if (err){ res.end(err) }
         res.send({message:'Video created', status: true})
       })
     }else{
       res.send({message:'Video already in database', status:false})
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
    if(error){}
    res.send(course)
    return

  })

});




export default router
