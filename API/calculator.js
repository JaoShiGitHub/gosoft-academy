const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  // console.log(req.body);
  // console.log(req.body.num1);
  // console.log(req.body.num2);
  // res.send("Thank you for posting something");

  const num1 = req.body.num1; // get value of input1
  const num2 = req.body.num2; // get value of input2
  const result = Number(num1) + Number(num2);
  res.send("The calculation result is : " + result); // display the sum of num1 and num2.
});

app.get("/bmiCalculator", (req, res) => {
  // res.send("Hello World");
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", (req, res) => {
  const weight = Number(req.body.weight);
  const height = Number(req.body.height);
  const BMI = Math.round(weight / (height * height));
  res.send("คุณมีค่า BMI = " + BMI);
});

app.get("/kanye", async (req, res) => {
  try {
    const url = "https://api.kanye.rest/"; // Replace with the URL you want to fetch data from
    const response = await axios.get(url);
    res.json(response.data); // Send the fetched data as a response
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

app.get("/java", async (req, res) => {
  try {
    const url = "https://v2.jokeapi.dev/joke/programming"; // Replace with the URL you want to fetch data from
    const response = await axios.get(url);
    res.json(response.data); // Send the fetched data as a response
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
