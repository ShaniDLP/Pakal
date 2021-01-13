var express = require('express');
var app = express();

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});




import express from 'express';

const hbs= require('hbs');


const app= express();

app.set('view engine' , 'hbs');

app.get('/', (req, res) => {
    res.render('Landing.js');
})


app.listen(3000, () =>{
console.log('listening on port 3000...');
});