
import { alertSuccesfull } from './dom.js';

export let exercises = [];


export function fetchExercises(){
    return fetch('/api/allExercises')
        .then(response => response.json())
        .then(data => {
            exercises = data;
        })
        .catch(error => {
            console.error(error);
        });
}

export function searchExercises(searchTerm) {

    searchTerm = searchTerm.value.trim().toLowerCase();

    if (searchTerm === "") {
      fetchExercises()
    } else {
      return fetch(`/api/exercisesByName/${searchTerm}`)
        .then(response => response.json())
        .then(data => {
          console.log(`searching for exercises with the term ${searchTerm}...`);
          exercises = data;
        })
        .catch(error => {
          console.error(error);
        });
    }
}


export function makePostRequest(exercise) {
  fetch("/addExercise", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization' : getCookie()
    },
    body: JSON.stringify(exercise)
  })
    .then(response => response.text()) 
    .then(data => {
      alertSuccesfull()

      console.log(data); 
    })
    .catch(error => {
      console.error(error);
    });
}

// Assuming you have the necessary HTML elements defined in your dashboard.html file

const logoutButton = document.getElementById('logout-button');

logoutButton.addEventListener('click', () => {
  
  document.cookie = `token=`;

});

function getCookie(){ 
  const x = document.cookie
  .split("; ")
  .find((row) => row.startsWith("token="))
  ?.split("=")[1];
  return x;
}

function checkIfLogged(){
  if(!getCookie()){
    return false;
  }
  return true;
}

window.onload = function() {
  if(!checkIfLogged()){
    window.location.href="/login.html";
  }
}