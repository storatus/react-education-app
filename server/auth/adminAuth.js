/**
 * adminAuth module - Ref: Example seen from https://goo.gl/HAeXNA - Checks for authorization in server side
 * @module adminAuth
 */

var jwt = require('jsonwebtoken');
const User = require('./../models/User')

 var adminAuth = (req, res, next) => {
  const token = req.headers['token'];

  if (token) {
    jwt.verify(token, 'something', (error, data) => {
      if (error) {
        return res.status(401).send({ error: 'Not authorized' });
      }
      let userId = data._id
      User.findById(userId)
      .then(userData => {

        let role = userData.role
        if (role !== 1) {
          res.status(404).send({ error: 'Not authorized' });
        }else{
          next()
        }

      })
      .catch(() => res.status(400).json({err: 'User does not exist'}))

    });
  }else{
      res.status(403).send({ error: 'Not authorized'});
  }
}
module.exports =  adminAuth
