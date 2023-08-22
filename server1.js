const http = require('http');
let port =8080;

const server = http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.write("this is home page");
        res.end();
    }
    else if(req.url==='/about')
    {
        res.write(`this is about page`);
        res.end();
    }
    else
    {
        res.write("<h1>404</h1>");
    }


})

server.listen(port,()=>{
    console.log(`server is runing: ${port}`);
})