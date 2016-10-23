var serverstatic = require('serve-static');
var express = require('express');
var app = express();

require('./app/route')(app);

var server = app.listen(80, function () {
  var host = server.address().address;
  var port = server.address().port;

	app.use(express.static('public'));

  console.log('Example app listening at http://%s:%s', host, port);

});
