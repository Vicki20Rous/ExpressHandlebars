var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {


var connection = mysql.createConnection({
  host: "	yhrz9vns005e0734.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "llgyawh4t4k6b6es",
  password: "ovvn2039gahn4h11",
  database: "caa5cv3ocnmfabc8"
});
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;
