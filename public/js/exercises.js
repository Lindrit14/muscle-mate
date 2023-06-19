
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
      'Content-Type': 'application/json'
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
  fetch('/logout', {
    method: 'POST',
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Logout successful, redirect or perform any other necessary action
        const savedExercises = data.exercises || [];
        // Handle the saved exercises as per your requirements
        window.location.href = '/login.html';
      } else {
        // Logout failed, display an error message or perform appropriate actions
        console.error('Logout failed:', data.error);
      }
    })
    .catch(error => {
      console.error('Error occurred during logout:', error);
    });
});







  

  