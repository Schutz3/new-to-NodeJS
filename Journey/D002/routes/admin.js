const express = require('express');
const r = express.Router();

r.get('/add-product', (req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>The "Add Product" Page</h1> <form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');

});

r.post('/admin/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});


module.exports = r;