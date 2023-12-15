// server.js
// where your node app starts
import { questions } from "./questions.mjs"; // Adjust the path to match the location of your module file

import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import rateLimit from "express-rate-limit";
// init project
// const express = require("express");
// const cors = require("cors");
// const rateLimit = require("express-rate-limit");

const app = express();
// const { MongoClient } = require("mongodb");


// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin) return callback(null, true);
//     if (origin === 'https://quiz-alexrasi94.vercel.app' || origin.endsWith('alexrasi94.vercel.app') || origin.endsWith('rasidev.com')) {
//       console.log('ORIGIN IS ALLOWED: ' + origin);
//       return callback(null, true);
//     } else {
//       var msg = 'The CORS policy for this site does not ' +
//                 'allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }
//   }
// }));

// const corsOptions = {
//   origin: 'https://quiz-alexrasi94.vercel.app'
// };

// app.use(cors(corsOptions));

// Apply to all requests
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  message: "Too many requests from this IP, please try again after 15 minutes",
});

app.use(limiter);

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

  const questionsResponse = {
    questions: questions,
  };

  // Fetch quiz data from a database or file
  res.json(questionsResponse);
});
