var mysql = require("mysql");
var connection;




connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.password,
    database: "burgers_db"
});



 connection.connect(function (err) {
    if (err) {
      console.error("\nError connecting: " + err.stack + "\n");
      return;
    }
    console.log("\nConnected as id " + connection.threadId + "\n");
  });
  
  module.exports = connection;