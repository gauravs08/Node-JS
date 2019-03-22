const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();
//---Stream read write is best for very very large file 
//-- fs.read and .write will fail 
//-- stream uses chunk and doesnt not load whole file in one go.

// const readStream = fs.createReadStream('./fsReadWriteEx.txt','utf8');
// const writeStream = fs.createWriteStream('exampleStream.txt');
// // readStream.on('data',(chunk)=>{
// //     console.log(chunk);
// //     writeStream.write(chunk);
// // });

//  ////--piping is short hand for above code.
//  readStream.pipe(writeStream);

// // ////--compress using pipe
// const readStream1 = fs.createReadStream('./fsReadWriteEx.txt','utf8');
// const comstream = fs.createWriteStream('example2.txt.gz');
// readStream1.pipe(gzip).pipe(comstream);

//--unzip file example2.txt.gz
const readStream2 = fs.createReadStream('./example2.txt.gz');
const writeStream2 = fs.createWriteStream('example2-uncompressed.txt');

readStream2.pipe(gunzip).pipe(writeStream2);
//--All operations are async so run one by one