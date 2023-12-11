// server.js
// where your node app starts

// init project
const express = require("express");
const cors = require("cors");
const rateLimit = require('express-rate-limit');

const app = express();


const corsOptions = {
  origin: 'https://quiz-alexrasi94.vercel.app'
};

app.use(cors(corsOptions));

// Apply to all requests
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  message: 'Too many requests from this IP, please try again after 15 minutes'
});

app.use(limiter);


// Enable CORS for all routes and origins
// app.use(cors());

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
  const test = { a: "xcxcxc" };
  // Fetch quiz data from a database or file
  res.json(test);
});
