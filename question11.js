const http = require('http');
const url = require('url');
const static = require('node-static');

const fileServer = new static.Server('./files/question11.html');

var server = http.createServer(function (req, res) {

    var u1 = url.parse(req.url, true);
    console.log(u1.pathname);
    if (u1.pathname == "/") {
        fileServer.serve(req, res);
    }
});

server.listen(8080,()=>{
    console.log("server listen on 8080");
})