const fs = require('fs');

// fs.mkdir('tutorial',(err)=> {
//     if(err)
//         console.log(err);
//      else{
//         console.log('Succesfully Creted FOLDER!!!');
//         fs.writeFile('./tutorial/t1.txt','123data',(err)=> {
//             if(err)
//                 console.log(err);
//             else
//                 console.log('Successfully creted file in FOLDER!!!');
//         });
//     }
// });    

////--remove folder you cannot delete a folder if it has file in it directly
////-- you need to unlink(delete) the file inside it before delete folder.
// fs.unlink('./tutorial/example.txt',(err)=> {
//     if(err)
//          console.log(err);
//     else
//     fs.rmdir('tutorial',(err)=> {
//         if(err)
//              console.log(err);
//         else
//              console.log('Successfully deleted the FOLDER!!!');
//     });
// });
////-- to delete a folder which as un known no of files.
fs.readdir('tutorial',(err,files)=> {
    if(err)
         console.log(err);
    else{
         console.log(files); //[ 't1.txt', 't2.txt' ]
         for(let file of files){
            fs.unlink('./tutorial/'+file,(err)=> {
                    if(err)
                         console.log(err);
                    else
                        console.log(file +' Deleted succesfully');
             });
        }
        // this call is asyncronous so it will not delete folder in first go
        fs.rmdir('tutorial',(err)=> {
                    if(err)
                         console.log(err);
                    else
                         console.log('Successfully deleted the FOLDER!!!');
                });
    }
});