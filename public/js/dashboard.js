let currentDay = new Date().getDay() -1 ;
if (currentDay === -1) {
    currentDay = 6; 
  }

let days = document.getElementsByClassName("day");

days[currentDay].classList.add("border-2", "border-amber-500");





const quoteText = document.querySelector(".quote");
const authorName = document.querySelector(".author .name");

const quoteBtn = document.querySelector("button");

const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");

// random quote function
function randomQuote(){
  quoteBtn.innerText = "Loading"

  fetch("https://api.quotable.io/random")
  .then(res => res.json())
  .then(result =>{
    console.log(result);
    quoteText.innerText = result.content;
    authorName.innerText = result.author;
    quoteBtn.innerText = "New Quote"
  })
}

quoteBtn.addEventListener("click", randomQuote);

soundBtn.addEventListener("click", () => {
  //ist eine web speech Api für speech requests
  let utterance = new SpeechSynthesisUtterance(quoteText.innerText);
  speechSynthesis.speak(utterance); //sagt die Quote
})

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(quoteText.innerText);
})





