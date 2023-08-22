const http = require('http');
const fs = require('fs');
const path = require('path');
let port =8080;


const server = http.createServer((req,res)=>{
    fs.readFile('./public/about.html',(err,html)=>{
        res.writeHead(200,{"Content-Type":"UTF-8"});
        res.end(html);
    });


});

server.listen(port,()=>{
    console.log(`server is runing: ${port}`);
})