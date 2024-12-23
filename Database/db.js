const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql2/promise");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "student_database",
  port: 3306,
});

app.get("/students", async (req, res) => {
  const connection = await dbConn;
  const rows = await connection.query("SELECT * from students");
  res.send(rows);
});

app.get("/students/:id", async (req, res) => {
  const connection = await dbConn;
  const rows = await connection.query(
    "SELECT * from students where id = " + req.params.id
  );
  res.send(rows);
});

app.listen(3000, () => {
  console.log("Hi Girll!!! I'm running at port 3000 XOXO");
});
