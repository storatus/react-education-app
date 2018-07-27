var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');

const User = require('./../models/User')

const secretKey = '´something'



// CREATE USER
router.post('/create', (req, res) => {

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

      bcrypt.hash(password, 2).then(hash => {
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

  let { email, password } = req.body

  // find user
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
