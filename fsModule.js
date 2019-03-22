
 const fs = require('fs');
//----create a file

fs.writeFile('fsCreatefileExample.txt',"this is an example",(err)=>{
    if(err)
            console.log(err);
        else{
            console.log('File Successfully created!!!');
           
           //Reading file
            fs.readFile('fsCreatefileExample.txt','utf8',(err,file) =>{
                if(err){
                    console.log(err);
                }else{
                    console.log(file);
                }
            });
        }
});


//--- rename the xreated file to example2.txt

// fs.rename('fsCreatefileExample.txt','example2.txt',(err)=>{
//     if(err)
//         console.log(err);
//      else
//         console.log('Succesfully renamed fle!!!');
               
// });

// //----Append some text to end--------

// fs.appendFile('example2.txt','\nSome more appended txt',(err)=> {
//     if(err)
//         console.log(err);
//      else
//         console.log('Succesfully Appended data to file!!!');
               
// });

// //------unlink a file---
// fs.unlink('example2.txt',(err)=> {
//     if(err)
//         console.log(err);
//      else
//         console.log('Succesfully deleted  fle!!!');
// });