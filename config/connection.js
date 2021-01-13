// DEPENDENCIES
const mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  // Database id JawsDB on Heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // Database is local
  // MySQL DB Connection Information (remember to change this with your specific credentials)
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    // Be sure to update with your own MySQL password!
    password: "",
    database: "burgers_db",
  });
}

// Initiate MySQL Connection
connection.connect((err) => {
  if (err) {
    console.error(`Error connecting: ${err.stack}`);
    return;
  }
  console.log(`Connected as id ${connection.threadId}`);
});

// Export the connection
module.exports = connection;
