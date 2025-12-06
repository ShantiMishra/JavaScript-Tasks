const redBtn = document.getElementById("btn-red");
const blueBlue = document.getElementById("btn-blue");
const greenBtn = document.getElementById("btn-green");
const yellowBtn = document.getElementById("btn-yellow");

const countRed = document.getElementById("count-red");
const countBlue = document.getElementById("count-blue");
const countGreen = document.getElementById("count-green");
const countYellow = document.getElementById("count-yellow");

const leader = document.getElementById("leader-count");
const resetBtn =document.getElementById("reset-btn");

let red=0;
let blue=0;
let green=0;
let yellow=0;

redBtn.addEventListener("click", ()=>{
    red++;
    countRed.textContent = red;
    updateLeader();
});

blueBtn.addEventListener("click", ()=>{
    blue++;
    countBlue.textContent = blue;
    updateLeader();
});

greenBtn.addEventListener("click", ()=>{
    green++;
    countGreen.textContent = green;
    updateLeader();
});

yellowBtn.addEventListener("click", ()=>{
    yellow++;
    countYellow.textContent = yellow;
    updateLeader();
});

function updateLeader(){
    const max = Math.max(red,blue,green,yellow)
    console.log(max)
    
}

updateLeader();


