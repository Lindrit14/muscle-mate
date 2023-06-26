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



