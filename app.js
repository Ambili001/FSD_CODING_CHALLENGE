const express = require("express");
const app = new express();
// const mongoose= require("mongoose");
const mongoose = require('mongoose') //db
mongoose.connect("mongodb+srv://Ambili97:thiruvonum001@cluster0.pkmrzlb.mongodb.net/CodeChallenge?retryWrites=true&w=majority"). then(()=>{
    console.log('mongoDB connected successfully!!!')
}).catch((error)=>{
    console.log(error.message)
})
const cors = require("cors");
const logger= require("morgan");
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const blogger_data = require("./models/detail");
const commentdata = require("./models/comment");
// mongoose.connect("mongodb+srv://Ambili97:thiruvonum001@cluster0.pkmrzlb.mongodb.net/CodeChallenge?retryWrites=true&w=majority")
// .then(()=>{
//     console.log("MongoDb is connected successfully");
// })
// .catch((error)=>{
//     console.log("Connection error "+error)
// })

app.get('/detaillist', async (req, res) => {

    try {

        const list = await blogger_data.find()
        res.send(list)


    } catch (error) {
        console.log(error)
    }

})

app.get('/commentlist', async (req, res) => {

    try {

        const list = await commentdata.find()
        res.send(list)


    } catch (error) {
        console.log(error)
    }

})
app.listen(3000,()=>{
    console.log("Server is listening to port 3000");
})
