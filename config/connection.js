// DEPENDENCIES
const mysql = require("mysql");

const connection;

if (process.env.JAWSDB_URL) {
  connection.mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // MySQL DB Connection Information (remember to change this with your specific credentials)
  connection = mysql.createConnection({
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
