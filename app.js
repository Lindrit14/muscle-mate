const express = require('express');
const indexRouter = require('./routes/indexRouter');
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");
const axios = require('axios');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const users = require("./userModel.js")
const exercisesModel = require("./exerciseModel.js")
const quotesModel = require("./quotesModel.js")


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

app.use("/api", indexRouter);

app.get("/", (req, res) => {
  res.render("index.html")
});

app.get("/users", (req, res) => {
  const userList = Object.values(users);
  res.json(userList);
});

app.get("/exercise", (req, res) => {
  res.json(Object.values(exercisesModel));
});

app.get("/quotes", (req, res) => {
  res.json(Object.values(quotesModel));
});

app.put("/stats", authToken, function (req, res) {
  const {username} = req.user;

  users[username].name = req.body.name;
  users[username].age = req.body.age;
  users[username].weight = req.body.weight;
  users[username].height = req.body.height;

  res.sendStatus(200);
});

app.get("/addExercise",authToken, (req, res) => {
  const {username} = req.user;

  let ex = exercisesModel[username].exercises;

  res.json(ex);
});

app.post("/addExercise", authToken, async (req, res) => {
  const exercise = req.body;
  const {username} = req.user;

  exercisesModel[username].exercises.push(exercise);
  
  res.sendStatus(200);
});

app.get("/addedQuotes",authToken, (req, res) => {
  const {username} = req.user;

  let ex = quotesModel[username].quotes;

  res.json(ex);
});

app.post("/addQuote", authToken, async (req, res) => {
  const quotes = req.body;
  const {username} = req.user;

  quotesModel[username].quotes.push(quotes);
  
  res.sendStatus(200);
});

app.delete('/deleteQuote/:quote',authToken, (req, res) => {
  const quoteId = req.params.quote;
  const {username} = req.user;

  let qu = quotesModel[username].quotes;

  const quoteIndex = qu.findIndex(exercise => exercise.quote === quoteId);
  if (quoteIndex !== -1) {
    qu.splice(quoteIndex, 1);
  }

  quotesModel[username].quotes = qu;

  res.sendStatus(200);
});

app.delete('/deleteExercise/:exerciseId',authToken, (req, res) => {
  const exerciseId = req.params.exerciseId;
  const {username} = req.user;

  let ex = exercisesModel[username].exercises;

  const exerciseIndex = ex.findIndex(exercise => exercise.id === exerciseId);
  if (exerciseIndex !== -1) {
    ex.splice(exerciseIndex, 1);
  }

  exercisesModel[username].exercises = ex;

  res.sendStatus(200);
});

app.post('/register', (req, res) => {
  const { username, password, name, age, weight, height } = req.body;

  if (!users[username]) {
    users[username] = { username, password, name, age, weight, height };
    exercisesModel[username] = {exercises: []};
    quotesModel[username] = {quotes: []};
    res.json({ success: true });
  } else {
    res.status(409).json({ success: false, error: 'Username already exists' });
  }
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users[username];

  if (user && user.password === password) {
    const token = jwt.sign({username},process.env.SECRET)
    res.json({token:token})
  } else {
    res.status(401).json({ success: false, error: 'Invalid Username or Password' });
  }
});

function authToken(req, res, next) {
  const header = req.headers["authorization"]
  const token = header
  if (token == null){
    return res.sendStatus(401)
  }

  jwt.verify(token, process.env.SECRET, (err, user) => {
    if (err){
      return res.sendStatus(403)
    }

    req.user = user
    next()
  })
}



app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/');
});
