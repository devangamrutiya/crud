var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var route = require('./route');

var app = express();
app.use('/api',route)
    app.listen(process.env.PORT||3000,()=>{
    console.log("server Started");
});
