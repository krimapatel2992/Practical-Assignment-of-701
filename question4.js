const WebSocket = require('ws')
var http = require('http');
var url = require('url');

var st = require('node-static');

var fileClient = new st.Server('./files/question4(1).html');
// var fileServer =new st.Server('./files/question4(2).html')

var httpserver = http.createServer(function(request, response) 
{
    var u1=url.parse(request.url,true)
    
//     else if(u1.pathname=='/server')
//     {
// fileServer.serve(request,response);
//     }
	request.on('end', function () {
	var get = url.parse(request.url, true).query;
	fileClient.serve(request, response);
	}).resume();

}).listen(8080, function() {
    console.log((new Date()) + 
      ' Server is listening on port 8080');
});

//WebSocket.Server({server: httpserver})
const wss = new WebSocket.Server({ server: httpserver });

wss.on('connection', function(ws) {
  ws.send('Hello client')
  
  ws.on('message', message => {
    console.log(`Received message => ${message}`)
    ws.send('I received '+message)
  })
  
})

//indexed.html(our client)->httpserver (our server)->cric
