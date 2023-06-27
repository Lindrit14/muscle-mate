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

/* export function alertDanger() {
  const alert = document.createElement("div");
  alert.classList.add("fixed", "bottom-4", "right-4", "p-6", "text-lg", "text-red-800", "rounded-xl", "bg-red-50", "dark:bg-gray-800", "dark:text-red-400");
  alert.innerHTML = 
    <span class="font-medium">Removed! </span>Your Quote has been removed!
  ;

  document.body.appendChild(alert);

  setTimeout(() => {
    alert.remove();
  }, 2000);
}
*/