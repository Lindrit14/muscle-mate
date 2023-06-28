export const workoutElement = document.getElementById("workoutContainer");


export function renderWorkout(workoutObject){

    console.log("workoutObject: " );
    console.log(workoutObject);

    const workoutArray = Object.values(workoutObject)

    console.log("workoutArray: ");
    console.log(workoutArray);
   
   
    console.log(workoutArray[1]);
    console.log(workoutArray[2]);
    console.log(workoutArray[3]);
    console.log(workoutArray[4]);

    const warmupArray = workoutObject["Warm Up"] || [];
    const mainExercisesArray = workoutObject["Exercises"] || [];
    const coolDownArray = workoutObject["Cool Down"] || [];
    const titleOfWorkout = workoutObject["key"] || "";


    const workoutArticle = document.createElement("article")
    workoutElement.append(workoutArticle)

    const divNameOfWorkout = document.createElement("div")
    const h1NameOfWorkout = document.createElement("h1")
    workoutArticle.append(divNameOfWorkout)
    divNameOfWorkout.append(h1NameOfWorkout)
    h1NameOfWorkout.textContent = titleOfWorkout



    const warmUp = document.createElement("div")
        workoutArticle.append(warmUp)   
        const warmUpTitle = document.createElement("h1")
        warmUp.append(warmUpTitle)
        warmUpTitle.textContent = "Warm Up!"
       
        
    const mainExercise = document.createElement("div")
    workoutArticle.append(mainExercise)
        const mainExerciseTitle = document.createElement("h1")
        mainExerciseTitle.textContent = "Exercises"
        mainExercise.append(mainExerciseTitle)


    
    const coolDown = document.createElement("div")
    workoutArticle.append(coolDown)
        const coolDownTitle = document.createElement("h1")
        coolDown.append(coolDownTitle)
        coolDownTitle.textContent = "Cool Down"



    workoutArticle.classList.add("flex" , "flex-col" ,"gap-6" ,"bg-slate-100" ,"w-1/2", "p-9", "rounded-lg")
    divNameOfWorkout.classList.add("flex" ,"justify-center")
    warmUp.classList.add("flex", "flex-col", "justify-center" ,"gap-3")
    warmUpTitle.classList.add()
    mainExercise.classList.add("flex" ,"flex-col" ,"gap-6", "rounded-lg" ,"p-12")
    mainExerciseTitle.classList.add()
    coolDown.classList.add("flex" ,"flex-col" ,"gap-5")
    coolDownTitle.classList.add()



   warmupArray.forEach(element => {
    const warmUpExercise = document.createElement("div")
    const h1warmUpExercise = document.createElement("h1")
    const pwarmUpExercise = document.createElement("p")

    warmUp.append(warmUpExercise)
    warmUpExercise.append(h1warmUpExercise)
    warmUpExercise.append(pwarmUpExercise)

    const exercise = element.Exercise
    const time = element.Time

    h1warmUpExercise.textContent = exercise
    pwarmUpExercise.textContent = time

    warmUpExercise.classList.add("flex" ,"gap-5" ,"border-4" ,"hover:border-4" ,"hover:border-amber-500" ,"p-4" ,"rounded-md")
    h1warmUpExercise.classList.add()
    pwarmUpExercise.classList.add()

   });


   mainExercisesArray.forEach(element => {
    
    const exercise = element.Exercise
    const sets = element.Sets
    const reps = element.Reps

    const mainExercisesExercise = document.createElement("div")
    const exerciseDetails = document.createElement("div")
    const h1MainExercises = document.createElement("h1")
    const pSets = document.createElement("p")
    const pReps = document.createElement("p")

    mainExercise.append(mainExercisesExercise)
    mainExercisesExercise.append(h1MainExercises)
    mainExercisesExercise.append(exerciseDetails)
    exerciseDetails.append(pSets)
    exerciseDetails.append(pReps)

    h1MainExercises.textContent = exercise
    pSets.textContent =  "Sets: "+ sets
    pReps.textContent = "Reps: "+ reps
   
    mainExercisesExercise.classList.add("flex" ,"flex-col" ,"gap-4" , "border-4" , "hover:border-4" ,"hover:border-amber-500" ,"p-4" ,"rounded-md")
    exerciseDetails.classList.add("flex" ,"gap-4" ,"ml-14")
    h1MainExercises.classList.add()
    pSets.classList.add()
    pReps.classList.add()
   });



coolDownArray.forEach(element => {
    const exercise = element.Exercise
    const time = element.Time

    const divCoolDownExerciseDetail = document.createElement("div")
        coolDown.append(divCoolDownExerciseDetail)
        const divCoolDownExercise = document.createElement("div")
            divCoolDownExerciseDetail.append(divCoolDownExercise)
            const h1CoolDownExercise = document.createElement("h1")
            const pCoolDownExercise = document.createElement("p")
            divCoolDownExercise.append(h1CoolDownExercise)
            divCoolDownExercise.append(pCoolDownExercise)

            h1CoolDownExercise.textContent = exercise
            pCoolDownExercise.textContent = time

        divCoolDownExerciseDetail.classList.add("flex" , "flex-col" ,"gap-3")
        divCoolDownExercise.classList.add("flex" ,"gap-5" ,"border-4" ,"hover:border-4" ,"hover:border-amber-500" ,"p-4" ,"rounded-md")
        h1CoolDownExercise.classList.add()
        pCoolDownExercise.classList.add()
});



}