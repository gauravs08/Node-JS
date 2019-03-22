//---http server creation
const http = require('http');

const server = http.createServer((req,res)=> {
    
    if(req.url=='/'){
        res.write('hello World from Nodejs');
        res.end();
    }else{
        res.write('You are using some diff urls');
        res.end();
    }
});
server.listen('3000');

