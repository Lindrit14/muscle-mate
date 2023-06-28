import { renderWorkout  } from './customWorkoutDOM.js';

async function fetchCustomWorkout(equipment, muscle, fitnessLevel, fitnessGoals){
    const url = "/api/getWorkout"
    const queryParams = {
    time: 30,
    equipment: equipment,
    muscle: muscle,
    fitness_level: fitnessLevel,
    fitness_goals: fitnessGoals
    }
  

    const queryString = Object.keys(queryParams)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(queryParams[key]))
    .join('&');


    try {
        const response = await fetch(url + '?' + queryString);
        const data = await response.json();
        renderWorkout(data)
        console.log(data); 

      } catch (error) {
        console.log("Error has occoured");
        console.error(error);
      }

}


const workoutBtn = document.getElementById("getWorkoutBtn")

workoutBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    const equipmentForm = document.getElementById("equipment").value
    const muscleForm = document.getElementById("muscle").value
    const fitnessLevelForm = document.getElementById("fitnessLevel").value
    const fitnessGoalsForm = document.getElementById("fitnessGoals").value

    fetchCustomWorkout(equipmentForm, muscleForm, fitnessLevelForm, fitnessGoalsForm)
    
    console.log(equipmentForm);
    console.log(muscleForm);
    console.log(fitnessLevelForm);
    console.log(fitnessGoalsForm);
})


