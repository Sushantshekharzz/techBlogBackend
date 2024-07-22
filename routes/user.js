var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Blog = require('../models/blog')
router.get('/', async function (req, res) {
    const id = req.query.id
    const user = await User.findOne({ where: { id: id } })
    res.send(user)


})
module.exports = router;
