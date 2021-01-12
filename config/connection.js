// DEPENDENCIES
const mysql = require("mysql");

// MySQL DB Connection Information (remember to change this with your specific credentials)
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  // Be sure to update with your own MySQL password!
  password: "Kmuraoka808!",
  database: "burgers_db",
});

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
