const express = require('express');
const route = express.Router();


route.use((req,res,next)=>{
    console.log('Middleware used.');
    next();
  });   

route.get('/example',(req,res)=>{
    res.send('/example been hit');
});

route.get('/',(req,res)=>{
    res.send('/ been hit');
});


module.exports = route;