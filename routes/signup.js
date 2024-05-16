var express = require('express');
var router = express.Router();
var User = require('../model/user');


/* GET home page. */
router.post('/', async function (req, res, next) {
  const userName = req.body.userName;
  const password = req.body.password;
  try {
    const user = await User.findOne({ where: { username: userName } });
    if (!user) {
        const value = await User.create({ username: userName, password: password, type: 'admin' });
      res.send({ 'message': "username sucessfully created" })
    }

    else {
      res.send({ 'message': "username already exist" });
    }
  }
  catch (e) {
    console.log("error", e)
  }
});

module.exports = router;
