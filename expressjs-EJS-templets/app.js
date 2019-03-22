const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

////-- if we dont want to show static folder 
////--name in resonse then we can alias it to diff name static -> public in chrome hit F12 and go to sources and console.
app.use('/public',express.static(path.join(__dirname,'/static')));

//ejs implementation: now the engine change to ejs and will find 'index' file inside views to load
app.set('view engine','ejs');

// try this url http://localhost:3000/books
app.get('/:userQuery',(req,res)=>{
    //res.render('index');
    res.render('index',{data:{
        userQuery       : req.params.userQuery,
        searchResult    :['book1','book2','book5'],
        loggedIn        : true,
        userName        : 'Gaurav'
    }});
});


app.use(bodyParser.urlencoded({extended:false})); // false means we are not handling compless data objects
app.use(bodyParser.json());

////--Creating Http POST request using Express js
app.post('/',(req,res) =>{
    console.log(req.body);
    //database work here
    //res.send('successfully posted data');
    res.json({success:true});
});


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/static','index.html'));
});


// app.get('/',(req,res)=>{
//     res.send('Hello World');
// });

// try to add /localhost:3000/example
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