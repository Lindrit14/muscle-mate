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