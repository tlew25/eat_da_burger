// MySQL CONNECTION
// ################################ //
// Setup localhost port and mysql database connection/ test threadid
var connection;
var mysql = require("mysql");

// ################################ //
// Insert JAWSDB_URL for Heroku Deployment
// ################################ //
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Peppa$$88",
    database: "burgers_db"
  });
};
// ################################ //
connection.connect(function(err) {
  if (err) throw err;
  console.log("MYSQL CONNECTED ID: " + connection.threadId + "\n");
});
// Export MySQL connection linking to burgers_db
module.exports = connection;
// ################################ //