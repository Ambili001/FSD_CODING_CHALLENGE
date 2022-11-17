const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Blogger_Detail = new Schema({
    name:String,
    Date:String,
    Institution:String,
   
})

const blogger_data=mongoose.model('detail',Blogger_Detail);
module.exports = blogger_data;
