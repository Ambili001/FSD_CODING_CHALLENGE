const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Comment_data = new Schema({
    name:String,
    Date:String,
    comment:String,
   
})
const commentdata=mongoose.model('comment',Comment_data);
module.exports = commentdata;