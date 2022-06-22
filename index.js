var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var route = require('./route');

mongoose.connect("mongodb+srv://devang:devang7492@cluster0.hchkg.mongodb.net/Student?retryWrites=true&w=majority").then(()=>{
    var app = express();
    app.use(bodyparser.urlencoded({extended:false}))
    app.use(express.json())
    app.use('/api',route);

    app.listen(process.env.PORT || 3000,()=>{
        console.log("Server Started");
    })
}).catch((err)=>{
    console.log(err);
})
