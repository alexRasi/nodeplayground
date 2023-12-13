// server.js
// where your node app starts

// init project
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const app = express();

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
  const questions = [
    {
      question: "What is the capital of France?",
      answers: ["Paris", "Berlin", "Rome", "London"],
      correctAnswer: "Paris",
    },
    {
      question: "Who is CEO of Tesla?   ",
      answers: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Tony Stark"],
      correctAnswer: "Elon Musk",
    },
    {
      question: "The iPhone was created by which company?",
      answers: ["Apple", "Intel", "Amazon", "Microsoft"],
      correctAnswer: "Apple",
    },
    {
      question: "How many Harry Potter books are there?",
      answers: ["1", "4", "6", "7"],
      correctAnswer: "7",
    },
    {
      question: "What is the chemical symbol for potassium?",
      answers: ["K", "Po", "Pt", "Kr"],
      correctAnswer: "K",
    },
    {
      question: "In which year did World War II end?",
      answers: ["1943", "1945", "1950", "1939"],
      correctAnswer: "1945",
    },
    {
      question: "What is the smallest prime number?",
      answers: ["0", "1", "2", "3"],
      correctAnswer: "2",
    },
    {
      question: "Which gas makes up the majority of Earth's atmosphere?",
      answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
      correctAnswer: "Nitrogen",
    },
    {
      question: "Who wrote the novel '1984'?",
      answers: [
        "George Orwell",
        "Aldous Huxley",
        "F. Scott Fitzgerald",
        "Ernest Hemingway",
      ],
      correctAnswer: "George Orwell",
    },
    {
      question: "What is the largest planet in our solar system?",
      answers: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Jupiter",
    },
    {
      question: "What is the chemical symbol for gold?",
      answers: ["Ag", "Au", "Fe", "Cu"],
      correctAnswer: "Au",
    },
    {
      question: "What is the boiling point of water in degrees Celsius?",
      answers: ["0°C", "100°C", "50°C", "25°C"],
      correctAnswer: "100°C",
    },
    {
      question: "Who is known as the 'Father of Modern Physics'?",
      answers: [
        "Albert Einstein",
        "Isaac Newton",
        "Niels Bohr",
        "Galileo Galilei",
      ],
      correctAnswer: "Albert Einstein",
    },
    {
      question: "What is the largest mammal on Earth?",
      answers: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: "Blue Whale",
    },
    {
      question: "What is the capital of Brazil?",
      answers: ["Rio de Janeiro", "Sao Paulo", "Brasilia", "Salvador"],
      correctAnswer: "Brasilia",
    },
    {
      question: "How many elements are there in the periodic table?",
      answers: ["92", "118", "109", "63"],
      correctAnswer: "118",
    },
    {
      question: "What is the chemical symbol for silver?",
      answers: ["Ag", "Au", "Fe", "Cu"],
      correctAnswer: "Ag",
    },
    {
      question: "Who is the author of 'Pride and Prejudice'?",
      answers: [
        "Jane Austen",
        "Emily Bronte",
        "Charles Dickens",
        "Leo Tolstoy",
      ],
      correctAnswer: "Jane Austen",
    },
    {
      question: "What is the largest desert in the world?",
      answers: [
        "Gobi Desert",
        "Arabian Desert",
        "Sahara Desert",
        "Atacama Desert",
      ],
      correctAnswer: "Sahara Desert",
    },
    {
      question: "What gas do plants release during photosynthesis?",
      answers: ["Oxygen", "Carbon Dioxide", "Methane", "Hydrogen"],
      correctAnswer: "Oxygen",
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      answers: ["Mars", "Venus", "Jupiter", "Neptune"],
      correctAnswer: "Mars",
    },
    {
      question: "What is the chemical symbol for sodium?",
      answers: ["S", "So", "Na", "No"],
      correctAnswer: "Na",
    },
    {
      question:
        "Who was the first woman to fly solo across the Atlantic Ocean?",
      answers: [
        "Amelia Earhart",
        "Bessie Coleman",
        "Harriet Quimby",
        "Jacqueline Cochran",
      ],
      correctAnswer: "Amelia Earhart",
    },
    {
      question: "What is the largest organ in the human body?",
      answers: ["Heart", "Brain", "Liver", "Skin"],
      correctAnswer: "Skin",
    },
    {
      question: "What is the largest planet in our solar system?",
      answers: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Jupiter",
    },
    {
      question: "What is the chemical symbol for gold?",
      answers: ["Ag", "Au", "Fe", "Cu"],
      correctAnswer: "Au",
    },
    {
      question: "What is the boiling point of water in degrees Celsius?",
      answers: ["0°C", "100°C", "50°C", "25°C"],
      correctAnswer: "100°C",
    },
    {
      question: "Who is known as the 'Father of Modern Physics'?",
      answers: [
        "Albert Einstein",
        "Isaac Newton",
        "Niels Bohr",
        "Galileo Galilei",
      ],
      correctAnswer: "Albert Einstein",
    },
    {
      question: "What is the largest mammal on Earth?",
      answers: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: "Blue Whale",
    },
    {
      question: "What is the capital of Brazil?",
      answers: ["Rio de Janeiro", "Sao Paulo", "Brasilia", "Salvador"],
      correctAnswer: "Brasilia",
    },
    {
      question: "How many elements are there in the periodic table?",
      answers: ["92", "118", "109", "63"],
      correctAnswer: "118",
    },
    {
      question: "What is the chemical symbol for silver?",
      answers: ["Ag", "Au", "Fe", "Cu"],
      correctAnswer: "Ag",
    },
    {
      question: "Who is the author of 'Pride and Prejudice'?",
      answers: [
        "Jane Austen",
        "Emily Bronte",
        "Charles Dickens",
        "Leo Tolstoy",
      ],
      correctAnswer: "Jane Austen",
    },
    {
      question: "What is the largest desert in the world?",
      answers: [
        "Gobi Desert",
        "Arabian Desert",
        "Sahara Desert",
        "Atacama Desert",
      ],
      correctAnswer: "Sahara Desert",
    },
    {
      question: "What gas do plants release during photosynthesis?",
      answers: ["Oxygen", "Carbon Dioxide", "Methane", "Hydrogen"],
      correctAnswer: "Oxygen",
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      answers: ["Mars", "Venus", "Jupiter", "Neptune"],
      correctAnswer: "Mars",
    },
    {
      question: "What is the chemical symbol for sodium?",
      answers: ["S", "So", "Na", "No"],
      correctAnswer: "Na",
    },
    {
      question:
        "Who was the first woman to fly solo across the Atlantic Ocean?",
      answers: [
        "Amelia Earhart",
        "Bessie Coleman",
        "Harriet Quimby",
        "Jacqueline Cochran",
      ],
      correctAnswer: "Amelia Earhart",
    },
    {
      question: "What is the largest organ in the human body?",
      answers: ["Heart", "Brain", "Liver", "Skin"],
      correctAnswer: "Skin",
    },
    {
      question: "Which gas is known as 'Laughing Gas'?",
      answers: ["Oxygen", "Carbon Dioxide", "Nitrous Oxide", "Hydrogen"],
      correctAnswer: "Nitrous Oxide",
    },
    {
      question: "What is the chemical symbol for oxygen?",
      answers: ["O2", "C", "O", "CO2"],
      correctAnswer: "O",
    },
    {
      question: "In which year did the Titanic sink?",
      answers: ["1907", "1912", "1921", "1936"],
      correctAnswer: "1912",
    },
    {
      question: "What gas do humans breathe out when they exhale?",
      answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      correctAnswer: "Carbon Dioxide",
    },
    {
      question: "What do bees collect from flowers?",
      answers: ["Water", "Nectar", "Sunlight", "Air"],
      correctAnswer: "Nectar",
    },
    {
      question: "Who painted 'Starry Night'?",
      answers: [
        "Pablo Picasso",
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Salvador Dali",
      ],
      correctAnswer: "Vincent van Gogh",
    },
    {
      question: "What is the chemical symbol for silver?",
      answers: ["Ag", "Au", "Fe", "Cu"],
      correctAnswer: "Ag",
    },
    {
      question: "What do you call a baby dog?",
      answers: ["Kitten", "Puppy", "Cub", "Foal"],
      correctAnswer: "Puppy",
    },
    {
      question: "What is the opposite of 'empty'?",
      answers: ["Full", "Half", "Closed", "Broken"],
      correctAnswer: "Full",
    },
    {
      question: "How many continents are there on Earth?",
      answers: ["Three", "Five", "Six", "Seven"],
      correctAnswer: "Seven",
    },
    {
      question: "Which animal is known for its hump on its back?",
      answers: ["Elephant", "Giraffe", "Camel", "Kangaroo"],
      correctAnswer: "Camel",
    },
    {
      question: "What is the largest organ in the human body?",
      answers: ["Heart", "Brain", "Liver", "Skin"],
      correctAnswer: "Skin",
    },
    {
      question: "What do bees collect from flowers?",
      answers: ["Water", "Nectar", "Sunlight", "Air"],
      correctAnswer: "Nectar",
    },
    {
      question: "What is the chemical symbol for oxygen?",
      answers: ["O2", "C", "O", "CO2"],
      correctAnswer: "O",
    },
    {
      question: "What is the opposite of 'fast'?",
      answers: ["Slow", "Quick", "Rapid", "Speedy"],
      correctAnswer: "Slow",
    },
    {
      question: "What is the chemical symbol for potassium?",
      answers: ["K", "Po", "Pt", "Kr"],
      correctAnswer: "K",
    },
    {
      question: "In which year did World War II end?",
      answers: ["1943", "1945", "1950", "1939"],
      correctAnswer: "1945",
    },
    {
      question: "What is the smallest prime number?",
      answers: ["0", "1", "2", "3"],
      correctAnswer: "2",
    },
    {
      question: "Which gas makes up the majority of Earth's atmosphere?",
      answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
      correctAnswer: "Nitrogen",
    },
    {
      question: "Who wrote the novel '1984'?",
      answers: [
        "George Orwell",
        "Aldous Huxley",
        "F. Scott Fitzgerald",
        "Ernest Hemingway",
      ],
      correctAnswer: "George Orwell",
    },
    {
      question: "What is the largest planet in our solar system?",
      answers: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Jupiter",
    },
    {
      question: "What is the chemical symbol for water?",
      answers: ["H2O", "CO2", "O2", "N2"],
      correctAnswer: "H2O",
    },
    {
      question: "What do you call a baby dog?",
      answers: ["Kitten", "Puppy", "Cub", "Foal"],
      correctAnswer: "Puppy",
    },
  ];

  const questionsResponse = {
    questions: questions,
  };

  // Fetch quiz data from a database or file
  res.json(questionsResponse);
});
