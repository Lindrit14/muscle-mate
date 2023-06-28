export const mainElement = document.getElementById("quote-otd");
import { makePostRequest } from './dashboard.js';



export function createQuotes(QuotesArray, firstLoad) {
    if (firstLoad) {
        mainElement.innerHTML = ""
        firstLoad = false
      }

      const quotesToLoad = QuotesArray;

      quotesToLoad.forEach(quote => {
        const article = document.createElement("article");
        const text = document.createElement("h2");
        const author = document.createElement("p");

        const icon = document.createElement("i");
        const divIcon = document.createElement("div")


        //implementieren text-to-speak
        const speakButton = document.createElement("button");
        speakButton.classList.add("rounded-full", "p-2", "bg-blue-500", "text-white", "mb-4");
        
        const speakIcon = document.createElement("i");
        speakIcon.classList.add("fas", "fa-volume-up");
        
        speakButton.appendChild(speakIcon);
        speakButton.addEventListener("click", () => {
          speakText(quote.quote); // Vorlesen des Zitats
        });

        //copy btn
        const copyButton = document.createElement("button");
        copyButton.classList.add("rounded-full", "p-2", "bg-blue-500", "text-white", "mb-4", "ml-4"); // ml-4 for left margin

        const copyIcon = document.createElement("i");
        copyIcon.classList.add("fas", "fa-copy");

        copyButton.appendChild(copyIcon);

        
        copyButton.addEventListener("click", () => {
          copyToClipboard(quote.quote);
        });
       

        divIcon.classList.add("flex", "justify-end","pr-4", "pb-4")
        icon.classList.add("fa", "fa-circle-plus", "text-4xl", "text-cyan-200/50", "hover:text-cyan-700/50"   );



        //article.classList.add("w-1/4", "max-w-sm", "bg-white", "border", "border-gray-200", "rounded-lg", "shadow");
        //text.classList.add("mb-2", "text-2xl", "font-bold", "tracking-tight", "text-gray-900");
        //author.classList.add("mb-3", "font-normal", "text-gray-700");



        text.textContent = quote.quote;
        author.textContent = quote.author;

        console.log(text);
        console.log(author);


        mainElement.append(article);
        article.append(text);
        article.append(author);

        divIcon.append(icon);
        article.append(divIcon);
        article.append(speakButton);// hier append
        article.append(copyButton);


        icon.addEventListener("click",()=>{
          makePostRequest(quote)
          console.log(quote.quote);
        })

      });
}

export function alertSuccesfull() {
  const alert = document.createElement("div");
  alert.classList.add("fixed", "bottom-4", "right-4", "p-6", "text-lg", "text-green-800", "rounded-xl", "bg-green-50", "dark:bg-gray-800", "dark:text-green-400");
  alert.innerHTML = `
    <span class="font-medium">Success</span> The Quote has been added to your Quotes!.`;

  document.body.appendChild(alert);

  setTimeout(() => {
    alert.remove();
  }, 2000);
}


// quote text-tospeak func
function speakText(text) {
  const speechSynthesis = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  speechSynthesis.speak(utterance);
}

//copy button func
function copyToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

