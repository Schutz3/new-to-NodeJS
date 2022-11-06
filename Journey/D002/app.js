const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();  


const admRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(admRoutes);
app.use(shopRoutes);


const server = http.createServer(app)


app.listen(3000);
console.log('Server is running on port 3000');