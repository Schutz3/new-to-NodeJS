const http = require('http');
const routes = require('./routes');
const server = http.createServer(routes)


server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});