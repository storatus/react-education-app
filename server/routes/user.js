var express = require('express');
var router = express.Router();
var fs = require('fs');
var mongoose = require('mongoose')
var path = require('path')

const User = require('./../models/User')


// CREATE USER
router.post('/create', (req, res) => {

  let user = new User();
  const userObj = req.body;
  let { firstName, lastName, email, password } = userObj

  user.firstName = firstName
  user.lastName = lastName
  user.email = email
  user.password = password


  user.save((error,data) => {
    if(error){res.send(err)}
    res.send(data)
  })

});


router.get('/', (req, res) => {
  User.find((err,data) => {
      if (err) { res.json(err) }
      res.json(data)
  })
});








// export default router
module.exports = router
