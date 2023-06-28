import { alertDanger } from './dom.js';


function getCookie(){ 
  const x = document.cookie
  .split("; ")
  .find((row) => row.startsWith("token="))
  ?.split("=")[1];
  return x;
}

function renderAddedExercises() {
    fetch(`/addExercise`,{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization' : getCookie()
      }
    })
      .then(response => response.json())
      .then(exercises => {
        const mainElement = document.getElementById("mainElement")
        Object.values(exercises).forEach(exercise => {
            const article = document.createElement("article");
            const img = document.createElement("img");
            const infoDiv = document.createElement("div");
            const title = document.createElement("h1");
            const bodyPart = document.createElement("p");
            const targetMuscle = document.createElement("p");
            const equipment = document.createElement("p");
            const icon = document.createElement("i");
            const divIcon = document.createElement("div")

            
          
            article.classList.add("w-1/4", "max-w-sm", "bg-white", "border", "border-gray-200", "rounded-lg", "shadow");
            img.classList.add("rounded-t-lg", "object-cover");
            infoDiv.classList.add("p-5");
            title.classList.add("mb-2", "text-2xl", "font-bold", "tracking-tight", "text-gray-900");
            bodyPart.classList.add("mb-3", "font-normal", "text-gray-700");
            targetMuscle.classList.add("mb-3", "font-normal", "text-gray-700");
            equipment.classList.add("mb-3", "font-normal", "text-gray-700");
            divIcon.classList.add("flex", "justify-end","pr-4", "pb-4")
            icon.classList.add("fa", "fa-circle-minus", "text-4xl", "text-red-500/50", "hover:text-red-700/50"   ); 
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
            article.append(divIcon); 


            icon.addEventListener("click", ()=>{
              deleteExercise(exercise);
            })
            
          });
        
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  }

  renderAddedExercises();




function deleteExercise(exercise) {
  fetch(`/deleteExercise/${exercise.id}`,
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization' : getCookie()
      },
      body: JSON.stringify(exercise)
    }).then(response => response.text()) 
  .then(data => {
    alertDanger();
    const article = document.getElementById(exercise.id)
    article.remove()
    console.log(data); 
  })
  .catch(error => {
    console.error(error);
  });
}