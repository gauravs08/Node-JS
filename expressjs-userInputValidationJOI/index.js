const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser'); // user body parser
const Joi = require('joi'); // user input validation

////-- if we dont want to show static folder 
////--name in resonse then we can alias it to diff name static -> public in chrome hit F12 and go to sources and console.
app.use('/public',express.static(path.join(__dirname,'/static')));

app.use(bodyParser.urlencoded({extended:false})); // false means we are not handling compless data objects
app.use(bodyParser.json());

////--Creating Http POST request using Express js
app.post('/',(req,res) =>{
    console.log(req.body);
    // Validating user input using joi
    const schema = Joi.object().keys({
        email : Joi.string().trim().email().required(),
        password : Joi.string().min(5).max(10).required()  
          });
    Joi.validate(req.body,schema,(err,result)=>{
        if(err){
            console.log(err);
            res.send('Error has occured!!!');
        }else{
            console.log(result);
            res.send('Successful send data!!!')
        }
    })
    //database work here
    //res.send('successfully posted data');
   // res.json({success:true});
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


// JOI Validating Nested Object and Arrays
// divide the error into small sections and at last add all those small schemas into final schema
const arrayString =['banana','becon','cheese'];
const arrayObject =[{example:'obj1'},{example:'obj2'},{example:'obj3'}];

const userInput ={ 
    personalInfo:{
                    streetinfo: 'Fleminginkatu',
                    city :'Helsinki',
                    state : 'FI'  // change this to > 2 words it will show error 
                      },
    preference: arrayString,
    interest : arrayObject
                };
//first schema
const  personalInfoSchema = Joi.object().keys({
    streetinfo: Joi.string().trim().required(),
    city :Joi.string().trim().required(),
    state : Joi.string().trim().length(2).required()
});           
 
//second schema
const preferenceSchema = Joi.array().items(Joi.string());

//third schema
const interestSchema = Joi.array().items(Joi.object().keys({
    example : Joi.string().required()

}));

//final schema 
const schema = Joi.object().keys({
personalInfo : personalInfoSchema,
preference : preferenceSchema,
interest : interestSchema
});

Joi.validate(userInput,schema,(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log(result);
    }
});