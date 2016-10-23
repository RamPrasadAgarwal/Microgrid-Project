var mysql      = require('mysql');
var connection = mysql.createConnection({
   host     : 'localhost',
  	user     : 'root',
  	password : 'root',
  	database : 'microgrid'
});

exports.validate_query= function(id,start_date,end_date,start_time,end_time) {
   var abcde;
   var post = {username: id, startdate: start_date, enddate: end_date, starttime: start_time, endtime: end_time};
   connection.query('INSERT INTO events SET ?', post ,function(err,rows){
      if(err) throw err;
      if(rows) {
         console.log("data stored");
         return returnown("data success");
      }
   });
   // if(abcde == 000){
   //    console.log("abcd == 000");
   //    return abcde;
   // }
   // else console.log("abcd!=000");
};
	
exports.fetch_all_rows= function() {
   connection.query('SELECT * FROM events' ,function(err,rows){
      if(rows) {
         return rows;
      }
   });
         return "rows failed";
   
};

function returnown(rows){
  console.log("inside returnown");
  return rows;
}