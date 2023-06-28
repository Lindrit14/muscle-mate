import { fetchQuotes, quotes } from './dashboard.js';
import { createQuotes } from './quotesdom.js';

let firstLoad = true;

fetchQuotes()
  .then(() => {
    createQuotes(quotes, firstLoad)
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
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