var express = require('express');
var app = express();
var port = process.env.port || 3000;

var request = require('request');

app.listen(port);
app.get('/', function(req, res)
{
  res.send("NAHUI!");
});

var url ='https://requestb.in/18vlicn1?a=1';
request(url, function (error, response, body) {
  if (!error) {
    
  }
});