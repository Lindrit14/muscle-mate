import { searchExercises, fetchExercises, exercises } from './exercises.js';
import { searchInput, searchButton, loadMoreBtn, backToTopButton, createExercises, scrollToTop } from './dom.js';

let startIndex = 0;
let firstLoad = true;

fetchExercises()
  .then(() => {
    createExercises(exercises, 8,startIndex,firstLoad)
    startIndex += 8
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });



searchButton.addEventListener("click", () => {
  searchExercises(searchInput);

  if(searchInput.value.trim().toLowerCase() === ""){
    createExercises(exercises, 8,0,firstLoad)
  }
});



searchInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    searchExercises(searchInput)
    .then(()=>{
      createExercises(exercises, 8,startIndex,firstLoad)
      startIndex += 8
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
  }
});

loadMoreBtn.addEventListener("click", () => {
  createExercises(exercises,8,startIndex ,false)
  startIndex += 8
});


backToTopButton.addEventListener("click", scrollToTop)





