// var connectmysql = require('./connect.js');
var mysql      = require('mysql');
var connection = mysql.createConnection({
   host     : 'localhost',
  	user     : 'root',
  	password : 'root',
  	database : 'microgrid'
});
module.exports = function(app){

    
	app.get('/', function (req, res) {
		console.log("inside index");
  		res.sendfile('dashboard/index.html');
	});

	var bodyParser = require('body-parser');
	var multer = require('multer');
 

	app.use(bodyParser.json()); // for parsing application/json
	app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use(multer()); // for parsing multipart/form-data

	app.post('/abcd', function (req,res){
		console.log("inside sech");
		var id = req.body.id;
		var start_date = req.body.start_date;
		var end_date = req.body.end_date;
		var start_time = req.body.start_time;
		var end_time = req.body.end_time;
		var post = {username: id, startdate: start_date, enddate: end_date, starttime: start_time, endtime: end_time};
		var data  = {success: "success"};
		connection.query('INSERT INTO events SET ?', post ,function(err,rows){
      		if(rows) res.send(data);
      	});
	});

	app.post('/abc', function (req, res) {
		var id = req.body.id;
		var start_date = req.body.start_date;
		var end_date = req.body.end_date;
		var start_time = req.body.start_time;
		var end_time = req.body.end_time;
		var post = {username: id, startdate: start_date, enddate: end_date, starttime: start_time, endtime: end_time};
		var data  = {success: "success"};
		
		connection.query('SELECT * FROM events' ,function(err,rows){
      		if(rows) {
      			res.send(rows);
      		}
   		});
		
    //other routes..
	});

	app.post('/remove', function (req,res) {
		var id = req.body.id;
		var start_date = req.body.start_date;
		var end_date = req.body.end_date;
		var start_time = req.body.start_time;
		var end_time = req.body.end_time;
		var data  = {success: "success"};
		var error1 = {error: "error"};
		var post = {username: id, startdate: start_date, enddate: end_date, starttime: start_time, endtime: end_time};
		console.log(post);
		connection.query('DELETE FROM events WHERE username = ? AND startdate = ? AND enddate = ? AND starttime = ? AND endtime = ?' , [id,start_date,end_date,start_time,end_time] ,function(err,rows){
      		if(rows) res.send(data);
      		if(err) res.send(err);
		});
	});
}