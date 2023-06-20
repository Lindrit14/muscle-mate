let currentDay = new Date().getDay() -1 ;
if (currentDay === -1) {
    currentDay = 6; 
  }

let days = document.getElementsByClassName("day");

days[currentDay].classList.add("border-2", "border-amber-500");

