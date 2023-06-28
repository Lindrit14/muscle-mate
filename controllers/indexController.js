const axios = require('axios');
require('dotenv').config();

// const helper = require('../util/controllerHelper') 

const URL = process.env.URL;
const API_KEY= process.env.API_KEY;
const API_HOST = process.env.API_HOST;

const QOUTE_URL = process.env.QOUTE_URL;
const QOUTE_API_KEY= process.env.QOUTE_API_KEY;
const QOUTE_API_HOST = process.env.QOUTE_API_HOST;



exports.getOneQuote = async (req,res) =>{

  const options = {
    method: 'GET',
    url: QOUTE_URL,
    params: {
      category: 'fitness',
      limit: '1'
    },
    headers: {
      'X-RapidAPI-Key': QOUTE_API_KEY,
      'X-RapidAPI-Host': QOUTE_API_HOST
    }
  };
  try {
    const result = await axios.request(options);
    res.json(result.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

}

exports.getAllExercises = async (req,res) =>{

  const options = {
    method: 'GET',
    url: URL,
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_HOST
    }
  };
  try {
    const result = await axios.request(options);
    res.json(result.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

}

exports.getAllBodyParts = async (req,res) =>{

  const options = {
    method: 'GET',
    url: `${URL}/bodyPartList`,
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_HOST
    }
  };
  console.log(URL);
  try {
    const result = await axios.request(options);
    res.json(result.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

}

exports.getExercisesByBodyPart = async(req, res) => {
    let  targetBodyPart  = req.params.bodyPart;

    const options = {
      method: "GET", 
      url: `${URL}/bodyPart/${targetBodyPart}`,
      headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': process.env.API_HOST
      }
    }
    try {
      const result = await axios.request(options);
      res.json(result.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  exports.getExercisesByID = async(req, res) => {
    const exerciseID = req.params.ID;

    const options = {
      method: "GET", 
      url: `${URL}/exercise/${exerciseID}`,
      headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': process.env.API_HOST
      }
    }

    console.log(ID);
    try {
      const result = await axios.request(options);
      console.log(this.name);
      res.json(result.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.getExercisesByName = async(req, res) => {
    const nameOfExercise = req.params.name;

    const options = {
      method: "GET", 
      url: `${URL}/name/${nameOfExercise}`,
      headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': process.env.API_HOST
      }
    }

    try {
      const result = await axios.request(options);
      res.json(result.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.getAllTargetMuscles = async(req, res) => {
 

    const options = {
      method: "GET", 
      url: `${URL}/targetList`,
      headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': process.env.API_HOST
      }
    }

    try {
      const result = await axios.request(options);
      res.json(result.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.getExercisesByTargetMuscle = async(req, res) => {
    const targetMuscle = req.params.muscle;

    const options = {
      method: "GET", 
      url: `${URL}/target/${targetMuscle}`,
      headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': process.env.API_HOST
      }
    }

    try {
      const result = await axios.request(options);
      res.json(result.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.getAllEquipment = async(req, res) => {
 

    const options = {
      method: "GET", 
      url: `${URL}/equipmentList`,
      headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': process.env.API_HOST
      }
    }

    try {
      const result = await axios.request(options);
      res.json(result.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  exports.getExercisesByEquipment = async(req, res) => {
    const equipment = req.params.equipment;

    const options = {
      method: "GET", 
      url: `${URL}/equipment/${equipment}`,
      headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': process.env.API_HOST
      }
    }

    try {
      const result = await axios.request(options);
      res.json(result.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  exports.getWorkout = async (req, res) => {
    const { time, equipment, muscle, fitness_level, fitness_goals } = req.query;
  
    const options = {
      method: 'GET',
      url: 'https://workout-planner1.p.rapidapi.com/customized',
      params: {
        time,
        equipment,
        muscle,
        fitness_level,
        fitness_goals
      },
      headers: {
        'X-RapidAPI-Key': '593af75b92mshaabf8f815410a9ap1e1772jsndfd7ac8c9f18',
        'X-RapidAPI-Host': 'workout-planner1.p.rapidapi.com'
      }
    };
  
    try {
      const response = await axios.request(options);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };



