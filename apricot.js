


var http = require("http"); // 1
http.createServer(function (request, response) { // 2
   //request.on("end", function () { // 3
      response.writeHead(200, { // 4
         'Content-Type': 'text/plain' // 7
      });
      response.end('Apricot: Hello HTTP!'); // 5
   //});
}).listen(8080); // 6
console.log('Server listening. (http://localhost:8080)'); // 8

/*
 =================================================================
 1) Include http module.
 2) Create the server. 
    A function is passed as parameter. This function is called on every request made.
    $request holds all request parameters.
    $response allows you to do anything with response sent to the client.
 3) Attach listener on end event.
    This event is called when client sent all data and is waiting for response.
 4) Write headers to the response.
    200 is HTTP status code (this one means success)
 5) Send data and end response.
 6) Listen on the 8080 port.
 7) Second parameter, holds header fields in object
    Content-Type is 'text/plain' because we are sending plain text
 8) This text will show up in the terminal

*/
