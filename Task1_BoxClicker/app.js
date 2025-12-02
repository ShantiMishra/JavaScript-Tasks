const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");

const Count1 = document.getElementById("count1");
const Count2 = document.getElementById("count2");
const Count3 = document.getElementById("count3");

let box1Count = 0;
let box2Count = 0;
let box3Count = 0;
let totalClicks=0;

const resetBtn= document.getElementById("reset-btn");
const totalCount = document.getElementById("total-count");

function nextColour(currentColour){
    if(currentColour=="red"){
        return "blue";
    }
    else if(currentColour=="blue"){
        return "green";
    }
    else{
        return "red";
    }
}

box1.addEventListener("click" , ()=>{
    box1Count++;
    totalClicks++;
    console.log(totalClicks)

    box1.style.backgroundColor = nextColour( box1.style.backgroundColor);

    Count1.textContent = "Box1 Clicks "+ box1Count;
    totalCount.textContent = "Total Clicks : "+ totalClicks;
});

box2.addEventListener("click", ()=> {
    box2Count++;
    totalClicks++;
    console.log(totalClicks)

    box2.style.backgroundColor = nextColour( box2.style.backgroundColor);

    Count2.textContent = "Box2 Clicks "+ box2Count;
    totalCount.textContent = "Total Clicks : "+ totalClicks;
});

box3.addEventListener("click", ()=>{
    box3Count++;
    totalClicks++;
    console.log(totalClicks)

    box3.style.backgroundColor = nextColour( box3.style.backgroundColor);

    Count3.textContent = "Box3 Clicks "+ box3Count;
    totalCount.textContent = "Total Clicks : "+ totalClicks;
})

resetBtn.addEventListener("click", ()=>{
    box1Count=0;
    box2Count=0;
    box3Count=0;

    totalCount=0;

     Count1.textContent = "Box1 Clicks "+ box1Count;
     Count2.textContent = "Box2 Clicks "+ box2Count;
     Count3.textContent = "Box3 Clicks "+ box3Count;

     totalCount.textContent = "Total Clicks : "+ totalClicks;

});


