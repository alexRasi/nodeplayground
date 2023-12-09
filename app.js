// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();
const cors = require("cors");

// Enable CORS for all routes and origins
app.use(cors());

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

// // listen for requests :)
// const listener = app.listen(process.env.PORT, function () {
//   console.log("Your app is listening on port " + listener.address().port);
// });

const listener = app.listen(3000, function () {
  console.log("Your app is listening on port " + 3000);
});

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/quiz", (req, res) => {
  const test = { a: "rtrtrt", B: "test" };
  // Fetch quiz data from a database or file
  res.json(test);
});
