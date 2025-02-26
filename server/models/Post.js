const mongoose=require("mongoose")
const { type } = require("os")

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        min:8,
        max:16
    },
    dateOfBirth:{
        type:Number
    }


})

const userModel=mongoose.model("usercollection",userSchema)
module.exports=userModel

