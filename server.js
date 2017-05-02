var http = require('http');
var express = require('express');
var app = express();

require('./route')(app);

var server = http.createServer(app).listen(process.env.PORT || 80);