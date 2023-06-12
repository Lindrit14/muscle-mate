const express = require('express');
const indexRouter = require('./routes/indexRouter');
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");
const axios = require('axios');
require('dotenv').config();
const session = require('express-session');

const exerciseModel = require("./exerciseModel.js")

const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, 'public')))
  app.use(session({
    secret: 'mjlz',
    resave: false,
    saveUninitialized: true
  }));
  



  app.use("/api",indexRouter)

  app.get("/", (req,res)=>{
    
  })


  app.get("/addExercise", (req,res)=>{
    // const storedExercise = req.session.exercise; // old code
    // res.send(storedExercise || exerciseModel);

    const savedExercises = req.session.exercises || [];
    res.json(savedExercises);

  })

  app.post("/addExercise", async (req, res)=>{
    // exerciseModel[req.body.id] = req.body //old code

    const exercise = req.body;

    req.session.exercises = req.session.exercises || [];
    req.session.exercises.push(exercise);
    
    res.sendStatus(200)
  })


  // app.delete("/deleteExercise", (req,res)=>{
   
    
  //   delete exerciseModel[req.body.id]


  //   res.sendStatus(200);
  // })

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
  







app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/');
  });