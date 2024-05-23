
const express = require('express')
const app= express()
const port = process.env.PORT || 3000
require('dotenv').config()
const mongoose = require('mongoose')
const user = require('../models/user-structure.js')
const Tweet = require('../models/tweet-structure.js')
const path = require('path')
const { userInfo } = require('os')
// i have a big problem on ejs things
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, './hi'));
mongoose.connect(process.env.PRIVATE_KEY)
.then(() =>{
    console.log('connected to the database ')
})
.catch((error) =>{
    console.log(error)
    
})

// home page
app.get('/home' , (req ,res) =>{
 res.render('home' , {title:'wassup'})

})
// display users
app.get('/list/users' , async(req ,res) =>{
    const find =  await user.find()
   // res.json(find)
    res.render('users' , {users:find})



})

// create user 
app.post('/create/user' , async (req ,res) =>{

    const newuser = new user({
        username:'example' ,
        name:'mahmoud' ,
        lastname:'rgueby' ,
        phoneNumber:212700230165 ,
        country:'spain' ,
        emailAdress:'mwebsitelab.boss@gmail.com',

    })
 await newuser.save()

     res.json(newuser)
})

//display Tweets 
app.get('/list/tweets' , async(req,res) =>{
    const find = await Tweet.find().populate('postedBy')
    res.json(find)
})

// update Tweets

app.patch('/update/tweet/:tweetid', async (req, res) => {
   
        const tweetid = req.params.tweetid;
        const updatedInfo = req.body;

        const updatedTweet = await Tweet.findByIdAndUpdate(tweetid, updatedInfo, { new: true });
       
   res.json(updatedTweet)
   
    
});




// delete user
app.delete('/delete/:userid' ,async (req , res) =>{
    const userid = req.params.userid
    await user.findById(userid)
    
    .then( (user) =>{
        console.log(user.name + ' deleted successfully')
    }
        
    )
    .then(
    
    await user.findByIdAndDelete(userid))
    .then(
        res.send('done')
    )
})


/*
///////////////////////tweet///////////
app.post('/create/tweet' , async(req, res) =>{
    const newTweet = new Tweet({
        postedBy:"663fb7d13d9705da1ff4abbd",
        title:"first tweet title",
        body:"first tweet body"
    })
     await newTweet.save()
     res.json(newTweet)
     res.send('new tweet created successfully')
})

*/




app.listen(port , () =>{
    console.log(`server is running in port:${port} `)
})



































































/*const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
//database 
const mongoose = require('mongoose');
const dbUrl='mongodb+srv://sam:sam@express-app.rlcr4oa.mongodb.net/?retryWrites=true&w=majority&appName=express-app'
//import user Schema
const user = require('../models/user-structure.js')
//import tweet Schema 
const tweet = require('../models/tweet-structure.js')

//connecting to the database
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

//middleware
app.use(express.json());
//defaultroute
app.get('/', (req, res) => {
    res.send('hello');
    
});

// create new tweet
app.post('/create/post' ,async (req , res) =>{
    const newTweet = new tweet({
        Creator:'663e678ce0b59773a7c23af8',
        title:'first post' ,
        content:'hello this post is empty'

    })
    await newTweet.save()
    res.json(newTweet)
    res.send('new tweet created')
})

//create new user manually 
app.post('/createNewUser' ,async (req,res) =>{

   
    const newuser = new user({
        name:'adam', 
        lastname:"w9",
        phoneNumber:212700230165 ,
        emailAdress:'adam123@gmail.com',
        isLoggedin:true ,
        country:'spain',

    })
    await newuser.save()
    res.json(newuser)
    res.send('new user created')
})
// show users in a json file 
app.get('/createNewUser' ,async (req,res) =>{
    // to display the users in a json file
    const finduser = await user.find()
     res.json(finduser)
     


})
// find user by searching
app.get('/createNewUser/:userid' ,async (req,res) =>{
    // to display the users in a json file
    try {
    const userid = req.params.userid
   const finduser =await  user.findById(userid)
   }
     catch (error){
        console.log(error)
     }

})
// teeeeeeeeeeeeeeeest
app.get('/find/:userid', async(req, res) => {
    const userid = req.params.userid; // Extract the user ID from the request parameters

    // Assuming "User" is your Mongoose model for user data
    
   user.findById(userid)
   .then(user =>{
    res.json(user)
    
    
    
   }
   )
});
// delete request (delete user)
app.delete('/createNewUser/:userid' ,async (req,res) =>{
    // to display the users in a json file
    try {
    const userid = req.params.userid
   const deleteUser =await  user.findByIdAndDelete(userid)
   res.send(deleteUser)
   }
     catch (error){
        console.log(error)
     }

})
app.get('/delete/:id' ,(req , res) =>{
    const userid = req.params.id
    const deleteMessage = "  has been deleted succesfully"
    
    /*user.findByIdAndDelete(userid)
    .then( user =>{
        res.send(deleteMessage)*/
   /* })
    user.findById(userid)
    .then(user =>{
        res.send(user.name + deleteMessage)
    } )
    .then(
        user.findByIdAndDelete(userid)
    )
    

   
    
})


//localhost port
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});*/