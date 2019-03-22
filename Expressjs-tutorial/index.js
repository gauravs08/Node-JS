const express = require('express');
const path = require('path');
const app = express();


////-- if we dont want to show static folder 
////--name in resonse then we can alias it to diff name static -> public
app.use('/public',express.static(path.join(__dirname,'/static')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/static','index.html'));
});

// app.get('/',(req,res)=>{
//     res.send('Hello World');
// });


app.get('/example',(req,res)=>{
    res.send('hitting example route');
});

// url localhost:3000/Gaurav/99
app.get('/example/:name/:age',(req,res)=>{
    console.log(req.params); // it is must parameter
    // url localhost:3000/Gaurav/99?tutorial=paramtutorial&sort=byage
    console.log(req.query); // optional parameter
    res.send('Hello '+req.params.name);
});
app.listen(3000);