var express = require('express');
const Contact = require('../models/contact')
var router = express.Router();
 router.post('/', async function (req,res){
    const email = req.body.email
    const name = req.body.name
    const message= req.body.message
    try{
        await Contact.create({email:email, name:name, message:message})
    }
    catch(e){
        console.log("error", error)
    }

 }
)
module.exports = router