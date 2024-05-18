var express = require('express');
const Contact = require('../model/contact')
var router = express.Router();
 router.post('/', async function (req,res){
    console.log
    const email = req.body.email
    const name = req.body.name
    const message= req.body.message
    try{
        await Contact.create({email:email, name:name, message:message})
    console.log("this one is hitting",req.body)
    }
    catch(e){
        console.log("error", error)
    }

 }
)
module.exports = router