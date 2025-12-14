const redBtn = document.getElementById("red");
const blueBtn = document.getElementById("blue");
const greenBtn = document.getElementById("green");
const yellowBtn = document.getElementById("yellow");
const orangeBtn = document.getElementById("orange");
const darkBlueBtn = document.getElementById("dark-blue");

const colorDisplay = document.getElementById("color-display");
const lastColor = document.getElementById("last-used")

redBtn.addEventListener("click" , ()=>{
    document.body.style.backgroundColor = "red";
    redBtn.classList.add("highlighted");
    colorDisplay.textContent = "Current Color : Red"
});

blueBtn.addEventListener("click" , ()=>{
    document.body.style.backgroundColor = "lightblue";
    blueBtn.classList.add("highlighted");
        colorDisplay.textContent = "Current Color : Blue"

});

greenBtn.addEventListener("click" , ()=>{
    document.body.style.backgroundColor = "green";
    greenBtn.classList.add("highlighted");
        colorDisplay.textContent = "Current Color : Green"

});

yellowBtn.addEventListener("click" , ()=>{
    document.body.style.backgroundColor = "yellow";
    yellowBtn.classList.add("highlighted");
        colorDisplay.textContent = "Current Color : Yellow";

});

orangeBtn.addEventListener("click" , ()=>{
    document.body.style.backgroundColor = "orange";
    orangeBtn.classList.add("highlighted");
        colorDisplay.textContent = "Current Color : Orange"

});

darkBlueBtn.addEventListener("click" , ()=>{
    document.body.style.backgroundColor = "darkblue";
    darkBlueBtn.classList.add("highlighted");
        colorDisplay.textContent = "Current Color : Dark Blue"


});