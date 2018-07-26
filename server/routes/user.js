var express = require('express');
var router = express.Router();
var fs = require('fs');
var mongoose = require('mongoose')
var path = require('path')
var bcrypt = require('bcrypt')
const User = require('./../models/User')


// CREATE USER
router.post('/create', (req, res) => {

  let user = new User();
  const userObj = req.body;
  let { firstName, lastName, email, password } = userObj
  user.firstName = firstName
  user.lastName = lastName
  user.email = email


  User.findOne({ email }).then(userData => {

    if (userData) {
      res.status(400).json({err: 'Email exsists'});
    }else {

      bcrypt.hash(password, 2).then(hash => {
        // bcrypt.compare(password, hash)
        user.password = hash
        user.save((error,data) => {
          if(error){res.send(err)}
          res.send(data)
        })

      })

    }
  });

});


router.post('/login', (req, res) => {

  let email = req.body.email
  let password = req.body.password

  console.log(email,password);





  // let user = new User();
  // const userObj = req.body;
  // let { firstName, lastName, email, password } = userObj
  // user.firstName = firstName
  // user.lastName = lastName
  // user.email = email
  //
  //
  // User.findOne({ email }).then(userData => {
  //
  //   if (userData) {
  //     res.status(400).json({err: 'Email exsists'});
  //   }else {
  //
  //     bcrypt.hash(password, 2).then(hash => {
  //       // bcrypt.compare(password, hash)
  //       user.password = hash
  //       user.save((error,data) => {
  //         if(error){res.send(err)}
  //         res.send(data)
  //       })
  //
  //     })
  //
  //   }
  // });

});





router.get('/', (req, res) => {
  User.find((err,data) => {
      if (err) { res.json(err) }
      res.json(data)
  })
});


// DELETE COURSE
router.delete('/delete/:userId', (req, res) => {
  let userId = req.params.userId;
  User.findOneAndDelete({ _id: userId }, (err, data) => {
      if (err) { res.json(err)}
      res.json(data)
  });
});





// export default router
module.exports = router
