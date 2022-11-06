const http = require('http');
const express = require('express');
const app = express();  

app.use((req, res, next) => {
    console.log('This always executes!');
    next();
});

app.use('/gwk', (req, res, next) => {
    console.log('In the /gwk middleware');
    res.send('<h1>Hello /gwk!</h1>');
//    next(); // Allows the request to continue to the next middleware in line
});

app.use('/', (req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Hello from Express!</h1>');
});

const server = http.createServer(app)


app.listen(3000);
console.log('Server is running on port 3000');