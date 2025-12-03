const showBio = document.getElementById("btn-showBio");
const showSkills = document.getElementById("btn-showSkills");
const showHobbies = document.getElementById("btn-showHobbies");

const showAll = document.getElementById("btn-showAll");
const hideAll = document.getElementById("btn-hideAll");

const sectionBio = document.getElementById("section-bio");
const sectionSkills = document.getElementById("section-skills");
const sectionHobbies = document.getElementById("section-hobbies");

const visibleCounter = document.getElementById("visible-counter");

function updateCounter(){
    let count =0;
    if(!sectionBio.classList.contains("hidden")){
        count++;
    }
    if(!sectionSkills.classList.contains("hidden")){
        count++;
    }
    if(!sectionHobbies.classList.contains("hidden")){
        count++;
    }

    visibleCounter.textContent= "Sections Visible : " + count;

}

showBio.addEventListener("click", ()=>{
     if (sectionBio.classList.contains("hidden")){
        sectionBio.classList.remove("hidden");
        showBio.textContent = "Hide Bio";
     }
     else{
        sectionBio.classList.add("hidden");
        showBio.textContent = "Show Bio";
     }

     updateCounter();
});

showSkills.addEventListener("click", ()=> {
    if(sectionSkills.classList.contains("hidden")){
        sectionSkills.classList.remove("hidden");
        showSkills.textContent = "Hide Skills";
    }
    else{
        sectionSkills.classList.add("hidden");
        showSkills.textContent = "Show Skills";
    }

    updateCounter();
});

showHobbies.addEventListener("click", ()=> {
    if(sectionHobbies.classList.contains("hidden")){
        sectionHobbies.classList.remove("hidden");
        showHobbies.textContent = "Hide Hobbies";
    }
    else{
        sectionHobbies.classList.add("hidden");
        showHobbies.textContent = "Show Hobbies";
    }

    updateCounter();
});

showAll.addEventListener("click", ()=>{
    sectionBio.classList.remove("hidden");
    sectionSkills.classList.remove("hidden");
    sectionHobbies.classList.remove("hidden");

    showBio.textContent ="Hide Bio";
    showSkills.textContent = "Hide Skills";
    showHobbies.textContent = "Hide Hobbies";

    updateCounter();
});

hideAll.addEventListener("click", ()=>{
    sectionBio.classList.add("hidden");
    sectionSkills.classList.add("hidden");
    sectionHobbies.classList.add("hidden");

    showBio.textContent ="Show Bio";
    showSkills.textContent = "Show Skills";
    showHobbies.textContent = "Show Hobbies";

    updateCounter();
});

updateCounter();

