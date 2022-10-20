const http = require('http');
const fs = require('fs');
 
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Hello W</title></head>');
    res.write('<body><h1>Hello from Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();

});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});