var express = require('express');
var router = express.Router();
var User = require('../model/user');


/* GET home page. */
router.post('/', async function (req, res, next) {
  const userName = req.body.userName;
  const password = req.body.password;
  try {
    const user = await User.findOne({ where: { username: userName, password: password } });

    if (user) {
      res.send({ 'message': "Sucessfully Login" , 'user':user})
    }
    else {
      res.send({ 'message': "invalid password" })

    }



  } catch (e) {
    console.log("error", e)
  }
});

module.exports = router;
