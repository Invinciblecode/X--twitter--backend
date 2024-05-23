const mongoose = require('mongoose')
const Schema = mongoose.Schema 
const userSchema = new Schema({
    username:{
        type:String ,
        required:true
    },
    name:{
        type:String , 
        required:true
    },
    lastname:{
        type:String , 
        required:true
    },
    phoneNumber: Number ,
    country:String ,
    emailAdress:{
        type:String ,
        required:true
    },
    posts:{
        
    }

} ,{timestamps:true})
const user = mongoose.model('user' , userSchema)
module.exports = user

































































/*const mongoose = require("mongoose")
const Schema = mongoose.Schema
const userSchema = new Schema({
    name:String , 
    lastname:String,
    phoneNumber:Number,
    emailAdress:String,
    country:String,
    isLoggedin:Boolean

} , {timestamps:true})
const user = mongoose.model('user' , userSchema)
module.exports = user*/