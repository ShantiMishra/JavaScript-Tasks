const likeBtn = document.getElementById("like");
const dislikeBtn = document.getElementById("dislike");
const likeCount = document.getElementById("count-like");
const dislikeCount = document.getElementById("count-dislike");
const displayMsg = document.getElementById("display");
const totalCount = document.getElementById("totalCount");
const resetBtn = document.getElementById("reset-btn");

let likes =0;
let dislike = 0;
let currentVote = null;

function updateUI(){

    likeCount.textContent = likes;
    dislikeCount.textContent = dislike;
    totalCount.textContent = "Total Count : "+ (likes-dislike);

    if (currentVote=="like"){
        displayMsg.textContent = "You have reacted with 👍";
    }
    if(currentVote=="dislike"){
        displayMsg.textContent= "You have reacted with 👎";
    }
    if(currentVote==null){
        displayMsg.textContent = "You haven't reacted yet."
    }
}

likeBtn.addEventListener("click", ()=>{
   if(currentVote=="like"){
    likes--;
    currentVote=null;
   }
   if(currentVote=="dislike"){
    likes++;
    dislike--;

   }
   else{
    likes++;
    currentVote = "like"
   }
});

dislikeBtn.addEventListener("click", ()=>{
    if(currentVote="like"){
        dislike++;
    }
    if(currentVote=="dislike"){
        dislike--;
        likes++;
    }
    else {
        dislike++;
        currentVote = "dislike";
    }
})

resetBtn.addEventListener("click", ()=>{
    likeCount.textContent = 0;
    dislikeCount.textContent = 0;
})