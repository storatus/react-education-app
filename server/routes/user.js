/**
 * user module - REST CALLS
 * @module user
 */


var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');

const User = require('./../models/User')
const Course = require('./../models/Course')
const secretKey = 'something'

var adminAuth = require('./../auth/adminAuth')


// GET ALL USERS
router.get('/', (req, res) => {
  User.find()
  .then(data => res.json(data))
  .catch(err => res.status(400).send({err: 'Could not get all users'}))
});


// CREATE USER
router.post('/', adminAuth, (req, res) => {

  let user = new User();
  const userObj = req.body;
  let { firstName, lastName, email, password, role } = userObj
  user.firstName = firstName
  user.lastName = lastName
  user.email = email
  user.role = role

  User.findOne({ email }).then(userData => {
    if (userData) {
      return res.status(400).json({err: 'Email exsists'});
    }else {

      // Ref: taken from bcrypt example https://goo.gl/4EMHbe
      bcrypt.hash(password, 2).then(hash => {
        user.password = hash
        user.save()
        .then(data => res.send(data))
        .catch(err => res.status(400).send({err: 'Could not create user'}))
      })
    }
  });
});


// GET SINGLE USER
router.get('/:userId', (req, res) => {
  let userId = req.params.userId

  User.findById(userId)
  .then(userData => res.send(userData))
  .catch(() => res.status(400).json({err: 'User does not exist'}))

});


// SINGLE LOGIN
router.post('/login', (req, res) => {

  let { email, password } = req.body

  // find user and if everything is found decrypt password
  User.findOne({email: email}).then(userData => {
    if (userData == null) {
      res.status(400).json({err: 'Email does not exist'});
    }else {
      let dbPassword = userData.password
      let {_id, firstName, lastName, email, role} = userData

      bcrypt.compare(password, dbPassword).then(result => {
            if (result === false) {
              return res.status(400).json({err: 'This is the wrong password'});
            }


            let jwtData = {};
            jwtData._id = _id
            jwtData.firstName = firstName
            jwtData.lastName = lastName
            jwtData.email = email
            jwtData.role = role

            let token = jwt.sign(jwtData, secretKey)
            res.json({token})

      })
    }
  })

});





// DELETE USER
router.delete('/:userId', (req, res) => {

  let userId = req.params.userId;

  Course.find().then(courseData => {
    courseData.forEach(val => {
      if (val.members.length > 0) {
            val.members.forEach(memberVal => {
                if (memberVal.userId == userId) {
                  Course.findByIdAndUpdate( val._id,
                    { $pull: { "members": { userId: userId } } },{new: true},(err,data) => {
                            console.log(data);
                  });
                }
            })
      }
    })
  })


  User.findOneAndDelete({ _id: userId })
  .then(data => res.json(data))
  .catch(err => res.status(400).send({err: 'Somthing went wrong'}))


});


module.exports = router
