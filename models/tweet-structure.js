const mongoose = require('mongoose')
const Schema = mongoose.Schema
const id=mongoose.Types.ObjectId
const tweetSchema = new Schema({
    postedBy:{
        type:id,
        ref:'user'
    } ,
    title:{
        type:String ,
    } ,
    
    body:{
        type:String ,
    } ,
    comments:{
        type:String 
    }

} ,{timestamps:true} )
const tweet = mongoose.model('tweet' , tweetSchema)
module.exports = tweet