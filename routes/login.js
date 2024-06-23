var express = require('express');
var router = express.Router();
var User = require('../model/user');
var jwt = require('jsonwebtoken');


/* GET home page. */
const secretKey = "Sushant Project"
router.post('/', async function (req, res, next) {
  const userName = req.body.userName;
  const password = req.body.password;
  const data  = {
    "UserName":userName,
    "Password"  : password
  }
  console.log("data",data)
  try {
    const user = await User.findOne({ where: { username: userName, password: password } });
    const token  = jwt.sign(data,secretKey, {expiresIn:'1h'})
    console.log("token", token)
    console.log("TTTTTTTTTTTTTTTTTTTtt")
    if (user) {
      res.send({ 'message': "Sucessfully Login" , 'user':user, 'token':token})
    }
    else {
      res.send({ 'message': "invalid password" })

    }



  } catch (e) {
    console.log("error", e)
  }
});

module.exports = router;
