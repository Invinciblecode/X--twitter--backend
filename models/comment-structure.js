const mongoose = require('mongoose')
const Schema = mongoose.Schema
const commentSchema = new Schema({
    tweetId: {
        type: mongoose.Types.ObjectId,
        ref: 'tweet',
        required: true
    },
    commentedBy:{
      type:mongoose.Types.ObjectId , 
      ref:'user'
    }, 
    text:{
        type:String, 
        required:true
    }


 
 } , {timestamps:true})