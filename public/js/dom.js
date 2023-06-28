import { makePostRequest } from './exercises.js';

export const mainElement = document.getElementById("mainContainer");
export const searchInput = document.getElementById("searchInput");
export const searchButton = document.getElementById("searchButton");
export const loadMoreBtn = document.getElementById("loadMoreBtn");
export const backToTopButton = document.querySelector(".back-to-top");
export const logoutButton = document.getElementById("logout-button")

export function createExercises(exerciseArray, itemsPerPage, startIndex, firstLoad) {
    if (firstLoad) {
        mainElement.innerHTML = ""
        firstLoad = false
      }
    
      const exercisesToLoad = exerciseArray.slice(startIndex, startIndex + itemsPerPage);
      
      exercisesToLoad.forEach(exercise => {
        const article = document.createElement("article");
        const img = document.createElement("img");
        const infoDiv = document.createElement("div");
        const title = document.createElement("h1");
        const bodyPart = document.createElement("p");
        const targetMuscle = document.createElement("p");
        const equipment = document.createElement("p");
        const icon = document.createElement("i"); // Create the icon element
        const divIcon = document.createElement("div")
        
      
        article.classList.add("w-1/4", "max-w-sm", "bg-white", "border", "border-gray-200", "rounded-lg", "shadow");
        img.classList.add("rounded-t-lg", "object-cover");
        infoDiv.classList.add("p-5");
        title.classList.add("mb-2", "text-2xl", "font-bold", "tracking-tight", "text-gray-900");
        bodyPart.classList.add("mb-3", "font-normal", "text-gray-700");
        targetMuscle.classList.add("mb-3", "font-normal", "text-gray-700");
        equipment.classList.add("mb-3", "font-normal", "text-gray-700");
        divIcon.classList.add("flex", "justify-end","pr-4", "pb-4")
        icon.classList.add("fa", "fa-circle-plus", "text-4xl", "text-cyan-200/50", "hover:text-cyan-700/50"   ); // Add the necessary classes and icon name
      
        article.id = exercise.id;
        img.src = exercise.gifUrl;
        title.textContent = exercise.name;
        bodyPart.textContent = "Body Part: " + exercise.bodyPart;
        targetMuscle.textContent = "Targeted Muscle: " + exercise.target;
        equipment.textContent = "Equipment: " + exercise.equipment;
      
        
      
        mainElement.append(article);
        article.append(img);
        article.append(infoDiv);
        infoDiv.append(title);
        infoDiv.append(bodyPart);
        infoDiv.append(targetMuscle);
        infoDiv.append(equipment);
        divIcon.append(icon);
        article.append(divIcon); // Append the icon element to the article


        icon.addEventListener("click",()=>{
          makePostRequest(exercise)
          console.log(exercise.id);
        })
        
        
      });
      
      startIndex += itemsPerPage;
      
      if (startIndex < exerciseArray.length) {
        loadMoreBtn.disabled = false;
      } else {
        loadMoreBtn.disabled = true;
        loadMoreBtn.classList.add("text-gray-600", "cursor-not-allowed", "opacity-50");
      }
    
}

export function showBackToTopButton() {
    const showOnPx = 100;
    document.addEventListener("scroll", () => {
        if (scrollContainer().scrollToTop > showOnPx) {
          backToTopButton.classList.remove("hidden")
        } else {
          backToTopButton.classList.add("hidden")
        }
      })
}

export function scrollToTop() {
    document.body.scrollIntoView({
        behavior: "smooth",
      });
}

function scrollContainer() {
    return document.documentElement || document.body;
  }

  export function alertSuccesfull() {
    const alert = document.createElement("div");
    alert.classList.add("fixed", "bottom-4", "right-4", "p-6", "text-lg", "text-green-800", "rounded-xl", "bg-green-50", "dark:bg-gray-800", "dark:text-green-400");
    alert.innerHTML = `
      <span class="font-medium">Success</span> The exercise has been added to your workout!.
    `;
  
    document.body.appendChild(alert);
  
    setTimeout(() => {
      alert.remove();
    }, 2000);
  }
  


  export function alertDanger() {
    const alert = document.createElement("div");
    alert.classList.add("fixed", "bottom-4", "right-4", "p-6", "text-lg", "text-red-800", "rounded-xl", "bg-red-50", "dark:bg-gray-800", "dark:text-red-400");
    alert.innerHTML = `
      <span class="font-medium">Removed! </span>Your Exercise has been removed!
    `;
  
    document.body.appendChild(alert);
  
    setTimeout(() => {
      alert.remove();
    }, 2000);
  }
  