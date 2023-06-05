const axios = require('axios');
require('dotenv').config();

// const helper = require('../util/controllerHelper') 

const URL = process.env.URL;
const API_KEY= process.env.API_KEY;
const API_HOST = process.env.API_HOST;


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





