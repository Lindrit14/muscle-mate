let currentDay = new Date().getDay() -1 ;
if (currentDay === -1) {
    currentDay = 6; 
  }

let days = document.getElementsByClassName("day");

days[currentDay].classList.add("border-2", "border-amber-500");





const quoteText = document.querySelector(".quote");
const authorName = document.querySelector(".author .name");

const quoteBtn = document.querySelector("button");

// random quote function
function randomQuote(){
  fetch("https://api.quotable.io/random")
  .then(res => res.json())
  .then(result =>{
    console.log(result);
    quoteText.innerText = result.content;
    authorName.innerText = result.author;
  })
}

quoteBtn.addEventListener("click", randomQuote);



