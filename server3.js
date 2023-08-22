const http = require('http');
const fs = require('fs');
const path = require('path');
let port =8080;


const server = http.createServer((req,res)=>{
   

    // if(req.url.match("\.jpg$"))
    // {
    //     var imagepath = path.join(__dirname,"public",req.url);
    //     var filetype = fs.createReadStream(imagepath);
    //     res.writeHead(200,{"Content-Type":"image/jpg"})
    //     filetype.pipe(res);
    // }
    // if(req.url.match('\.css$'))
    // {
    //     var csspath = path.join(__dirname,'public',req.url);
    //     console.log(csspath);
    //     var redpath = fs.createReadStream(csspath,"utf-8");
    //     res.writeHead(200,{"Content-Type":"text/css"})
    //     redpath.pipe(res);
    // }
    



    if(req.url==='/')
    {
        fs.readFile('./public/home.html',(err,html)=>{
            res.writeHead(200,{"Content-Type":"UTF-8"});
            res.end(html);
        });
    }
    else if(req.url=='/about')
    {
        fs.readFile('./public/about.html',(err,html)=>{
            res.writeHead(200,{"Content-Type":"UTF-8"});
            res.end(html);
        });
    }
    else if(req.url.match('\.css$'))
    {
        var csspath = path.join(__dirname,'public',req.url);
        console.log(csspath);
        var redpath = fs.createReadStream(csspath,"utf-8");
        res.writeHead(200,{"Content-Type":"text/css"})
        redpath.pipe(res);
    }
    else if(req.url.match('\.js$'))
    {
        var csspath = path.join(__dirname,'public',req.url);
        console.log(csspath);
        var redpath = fs.createReadStream(csspath,"utf-8");
        res.writeHead(200,{"Content-Type":"text/js"})
        redpath.pipe(res);
    }
    else if(req.url.match("\.jpg$"))
    {
        var imagepath = path.join(__dirname,"public",req.url);
        var filetype = fs.createReadStream(imagepath);
        res.writeHead(200,{"Content-Type":"image/jpg"})
        filetype.pipe(res);
    }

    else
    {
        fs.readFile('./public/errorpage.html',(err,html)=>{
            res.writeHead(200,{"Content-Type":"UTF-8"});
            res.end(html);
        });

    }


});

server.listen(port,()=>{
    console.log(`server is runing: ${port}`);
})