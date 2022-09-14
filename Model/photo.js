var mongoose = require('mongoose');

var studSchema = mongoose.Schema({
    albumId:Number,
    id:Number,
    title:String,
    url:String,
    thumbnailUrl:String
})

module.exports = mongoose.model("photos",studSchema);