export const mainElement = document.getElementById("quote-otd");

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
       
        
      
        //article.classList.add("w-1/4", "max-w-sm", "bg-white", "border", "border-gray-200", "rounded-lg", "shadow");
        //text.classList.add("mb-2", "text-2xl", "font-bold", "tracking-tight", "text-gray-900");
        //author.classList.add("mb-3", "font-normal", "text-gray-700");
      

        text.textContent = quote.quote;
        author.textContent = quote.author;

        console.log(text)
        console.log(author)

        mainElement.append(article);
        article.append(text);
        article.append(author);
      });
}