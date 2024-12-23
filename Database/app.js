const express = require("express");
const mysql = require("mysql2");
const app = express();

app.get("/students", (req, res) => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "student_database",
  });

  // connect to database
  connection.connect();

  connection.query(
    "SELECT * from students WHERE id = 5",
    (err, rows, fields) => {
      if (err) throw err;

      // return response to client (transform record to json array)
      res.json(rows);
    }
  );

  // disconnect database
  connection.end();
});

app.listen(3000, () => {
  console.log("server started on port 3000!");
});
