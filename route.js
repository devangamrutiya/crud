var express = require('express');
const stud = require('./Model/stud');
const photo = require('./Model/photo');
var router = express.Router();


router.get('/stud',async(req,res)=>{
    var imovie = await stud.find();
    res.send(imovie);
    res.sendFile("index.html",{root:__dirname});
})

router.get('/photo',async(req,res)=>{
    var iphoto = await photo.find();
    res.send(iphoto);
    res.sendFile("index.html",{root:__dirname});
})
module.exports = router;