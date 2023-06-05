let exercises = []; // Array to store all exercises
let startIndex = 100;
const itemsPerPage = 8;
const mainElement = document.getElementById("mainContainer");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const loadMoreBtn = document.getElementById("loadMoreBtn");
let firstLoad = true;

function loadExercises() {
  if (firstLoad) {
    mainElement.innerHTML = "";
    firstLoad = false;
  }

  const exercisesToLoad = exercises.slice(startIndex, startIndex + itemsPerPage);

  exercisesToLoad.forEach(exercise => {
    const article = document.createElement("article");
    const img = document.createElement("img");
    const infoDiv = document.createElement("div")
    const title = document.createElement("h1");
    const bodyPart = document.createElement("p");
    const targetMuscle = document.createElement("p");
    const equipment = document.createElement("p");
    const favouriteButton = document.createElement("button")
    
  
    article.classList.add("w-1/4", "max-w-sm", "bg-white", "border", "border-gray-200", "rounded-lg", "shadow");
    img.classList.add("rounded-t-lg", "object-cover");
    infoDiv.classList.add("p-5")
    title.classList.add("mb-2", "text-2xl", "font-bold", "tracking-tight", "text-gray-900");
    bodyPart.classList.add("mb-3", "font-normal", "text-gray-700");
    targetMuscle.classList.add("mb-3", "font-normal", "text-gray-700");
    equipment.classList.add("mb-3", "font-normal", "text-gray-700");
    favouriteButton.classList.add("btn-primary")
    
    article.id = exercise.id
    img.src = exercise.gifUrl;
    title.textContent = exercise.name;
    bodyPart.textContent = "Body Part: " + exercise.bodyPart;
    targetMuscle.textContent = "Targeted Muscle: " + exercise.target;
    equipment.textContent = "Equipment: " + exercise.equipment;

    mainElement.append(article);
    article.append(img);
    article.append(infoDiv)
    infoDiv.append(title);
    infoDiv.append(bodyPart);
    infoDiv.append(targetMuscle);
    infoDiv.append(equipment);
  });

  startIndex += itemsPerPage;

  if (startIndex < exercises.length) {
    loadMoreBtn.disabled = false;
  } else {
    loadMoreBtn.disabled = true;
    loadMoreBtn.classList.add("text-gray-600", "cursor-not-allowed",  "opacity-50")
  }
}

function searchExercises() {
  const searchTerm = searchInput.value.trim();
  if (searchTerm === "") {
    fetch('/api/allExercises')
      .then(response => response.json())
      .then(data => {
        exercises = data;
        startIndex = 0;
        firstLoad = true;
        loadExercises();
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  } else {
    fetch(`/api/exercisesByName/${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        exercises = data;
        startIndex = 0;
        firstLoad = true;
        loadExercises();
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  }
}

searchButton.addEventListener("click", () => {
  searchExercises();
});

searchInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    searchExercises();
  }
});

loadMoreBtn.addEventListener("click", () => {
  loadExercises();
});

fetch('/api/allExercises')
  .then(response => response.json())
  .then(data => {
    exercises = data;
    loadExercises();
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });

const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
})

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};

backToTopButton.addEventListener("click", goToTop)

