import { alertSuccesfull } from './quotesdom.js';

let currentDay = new Date().getDay() -1 ;
if (currentDay === -1) {
    currentDay = 6; 
  }

let days = document.getElementsByClassName("day");

days[currentDay].classList.add("border-2", "border-amber-500");


export let quotes = [];

export function fetchQuotes(){
  return fetch('/api/oneQuote')
      .then(response => response.json())
      .then(data => {
        quotes=data;
      })
      .catch(error => {
          console.error(error);
      });
}




export function makePostRequest(quote) {
  fetch("/addQuote", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization' : getCookie()
    },
    body: JSON.stringify(quote)
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

const logoutButton = document.getElementById('log-out');

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

