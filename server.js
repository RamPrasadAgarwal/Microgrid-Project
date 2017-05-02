var http = require('http');
var express = require('express');
var app = express();

require('./app/route')(app);
app.use(express.static('public'));

var server = http.createServer(app).listen(process.env.PORT || 80);