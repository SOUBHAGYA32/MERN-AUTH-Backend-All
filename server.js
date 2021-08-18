const express = require('express');
const userroute = require('./routes/userroute')
var app=express()
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.use('/api/user',userroute)

app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

});
app.listen(5000, ()=>{
    console.log(`Server is Started on port : http://localhost:5000`);  
})