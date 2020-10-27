const express = require("express");
var request= require("request");
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://sdlp:Em1qnmDSLrbvVMOH@cluster0.p334u.gcp.mongodb.net/PakalDB?retryWrites=true&w=majority";

const app = express();
const port = 5000; 

app.get('/', (req, res) => {  res.send('Hello World!')});
app.get('/new', (req, res) => {  res.send('this is new')});

 // send data from mongoDB to client 
 app.get('/getinfo', function (req, res) {

   MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("PakalDB");
      dbo.collection("sites").find({}).toArray(function(err, result) {
        if (err) throw err;
        var sites =JSON.stringify(result);
        res.end(sites);
        db.close();
      });
    
      });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)});
