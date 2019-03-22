const fs = require('fs');

//---Stream read write is best for very very large file 
//-- fs.read and .write will fail 
//-- stream uses chunk and doesnt not load whole file in one go.

const readStream = fs.createReadStream('./fsReadWriteEx.txt','utf-8');
const writeStream = fs.createWriteStream('example2.txt');
readStream.on('data',(chunk)=>{
    console.log(chunk);
    writeStream.write(chunk);
});