//import { alertDanger } from './quotesdom.js';/

function renderAddedQuotes() {
      fetch(`/addedQuotes`,{
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization' : getCookie()
        }
      })
        .then(response => response.json())
        .then(quotes => {
          const mainElement = document.getElementById("mainElement")
          Object.values(quotes).forEach(quoteData => {
              const article = document.createElement("article");
              const quote = document.createElement("p");
              const author = document.createElement("p");
              const icon = document.createElement("i");
              const divIcon = document.createElement("div")



              article.classList.add("p-6", "bg-white", "rounded-lg", "shadow", "w-1/4", "h-[16rem]");
              quote.classList.add("mb-3", "font-normal", "text-gray-700");
              author.classList.add("mb-3", "font-normal", "text-gray-700");
              divIcon.classList.add("flex", "justify-end","pr-4", "pb-4")
              icon.classList.add("fa", "fa-circle-minus", "text-4xl", "text-red-500/50", "hover:text-red-700/50"   ); 

              article.id=quoteData.quote;
              quote.textContent = quoteData.quote;
              author.textContent = quoteData.author;


              mainElement.append(article);
              article.append(quote);
              article.append(author);
              divIcon.append(icon);
              article.append(divIcon); 


              icon.addEventListener("click", ()=>{
                deleteQuote(quoteData);
              })

            });

        })
        .catch(error => {
          // Handle any errors
          console.error(error);
        });
    }

    renderAddedQuotes();


  function deleteQuote(quoteData) {
    fetch(`/deleteQuote/${quoteData.quote}`,
      {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization' : getCookie()
        },
        body: JSON.stringify(quoteData)
      }).then(response => response.text()) 
    .then(data => {
      //alertDanger();
      const article = document.getElementById(quoteData.quote)
      article.remove()
      console.log(data); 
    })
    .catch(error => {
      console.error(error);
    });
  }


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