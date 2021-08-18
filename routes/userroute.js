const express = require('express')
var app=express()
const router = express.Router()

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/mernauth', {useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log("MongoDB connection Successful..!")
    }
})
var Usermodel = mongoose.model('user', {name:String, email:String, password:String})

router.post('/registeruser', (req,res)=>{

    var newuser = new Usermodel({name:req.body.name, email:req.body.email, password:req.body.password})
    newuser.save((err)=>{
        if(err)
        {
            res.send('Something Went Wrong..')
        }
        else{
            res.send('Registration Successfull...')
        }
    })

})

router.post('/loginuser', (req,res)=>{
    Usermodel.find({
        email:req.body.email,
        password:req.body.password
    }, (err, documents)=>{
        if(err)
        {
            res.send('Something went wrong!')
        }
        else{
            if(documents.length==0){
                res.send('Login Failed')
            }
            else{
                res.send('Login Successful..!')
            }
        }
    })
})

router.post('/getusers', (req,res)=>{
    Usermodel.find({}, (err,documents)=>{
        if(err)
        {
            res.send('Something Went Wrong..!')
        }
        else{
            res.send(documents)
        }
    })
})

module.exports=router