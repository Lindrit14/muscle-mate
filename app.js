const express = require('express');
const indexRouter = require('./routes/indexRouter');
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");
const axios = require('axios');
require('dotenv').config();
const session = require('express-session');

const users = require("./userModel.js")



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

app.use(session({
  secret: 'mjlz',
  resave: false,
  saveUninitialized: true
}));

app.use("/api", indexRouter);

app.get("/", (req, res) => {
  res.render("index.html")
});

app.get("/users", (req, res) => {
  const userList = Object.values(users);
  res.json(userList);
});

app.get("/addExercise", (req, res) => {
  const savedExercises = req.session.exercises || [];
  res.json(savedExercises);
});

app.post("/addExercise", async (req, res) => {
  const exercise = req.body;
  req.session.exercises = req.session.exercises || [];
  req.session.exercises.push(exercise);
  res.sendStatus(200);
});

app.delete('/deleteExercise/:exerciseId', (req, res) => {
  const exerciseId = req.params.exerciseId;
  const exercises = req.session.exercises || [];
  const exerciseIndex = exercises.findIndex(exercise => exercise.id === exerciseId);
  if (exerciseIndex !== -1) {
    exercises.splice(exerciseIndex, 1);
  }
  req.session.exercises = exercises;
  res.sendStatus(200);
});

app.post('/register', (req, res) => {
  const { username, password } = req.body;

 if (!users[username]) {
    users[username] = { username, password };
    res.json({ success: true });
  } else {
    res.status(409).json({ success: false, error: 'Username already exists' });
  }
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users[username];

  if (user && user.password === password) {
    req.session.user = user;
    const savedExercises = req.session.exercises || [];
    res.json({ success: true, exercises: savedExercises });
  } else {
    res.status(401).json({ success: false, error: 'Invalid Username or Password' });
  }
});

function requireLogin(req, res, next) {
  if (req.session.user) {
    // User is logged in, proceed to the next middleware or route handler
    next();
  } else {
    // User is not logged in, redirect to the login page or send an error response
    res.redirect('/login');
  }
}

app.post('/logout', (req, res) => {
  // Store the user's exercises in a separate variable
  const savedExercises = req.session.exercises || [];

  req.session.destroy((err) => {
    if (err) {
      res.status(500).json({ success: false, error: 'Logout failed' });
    } else {
      // Send the stored exercises along with the success response
      res.json({ success: true, exercises: savedExercises });
    }
  });
});





app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/');
});
