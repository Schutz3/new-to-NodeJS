const http = require('http');
const express = require('express');

const server = http.createServer()


server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
    console.log(routes.someText);
});