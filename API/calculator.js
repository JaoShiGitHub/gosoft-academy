const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  res.send("Thank you for posting something");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
