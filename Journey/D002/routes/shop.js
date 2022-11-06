const express = require('express');
const r = express.Router();

r.get('/', (req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>The ROOT Page</h1>');
    
});

module.exports = r;