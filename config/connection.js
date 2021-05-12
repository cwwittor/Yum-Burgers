const mysql = require("mysql");

let connection;
console.log(process.env.JAWSDB_URL)
if (process.env.JAWSDB_URL){
    console.log("Connected to JAWSDB")
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    console.log("Connected to localhost")
    connection = mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "root",
        password: "password",
        database: "burgers_db"

    });
}

connection.connect((err) => {

    if (err) {
      console.error(`error connecting: ${err.stack}`);
      return;
    }

    console.log(`connected as id ${connection.threadId}`);
  });
  

  module.exports = connection;