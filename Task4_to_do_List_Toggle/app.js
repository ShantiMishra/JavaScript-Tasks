const todoItems = document.querySelectorAll(".to-do-items");
const completedCount = document.getElementById("complete-count");
const progressBar = document.querySelectorAll("#progress");
const markAll = document.getElementById("mark-all");
const unmarkAll = document.getElementById("unmark-all");

function updateCount(){
    let count =0;

    todoItems.forEach(item =>{
       if( item.classList.contains("completed")){
        count++;
       }

       completedCount.textContent = `Completed : ${count}/5`;
    })
}


todoItems.forEach(item => {
    item.addEventListener("click", ()=> {
        item.classList.toggle('completed');
        updateCount();
    })
});

markAll.addEventListener("click", ()=>{
    todoItems.forEach(item =>{
        item.classList.add("completed");
        updateCount();
    })
});

unmarkAll.addEventListener("click", ()=>{
    todoItems.forEach(item =>{
        item.classList.remove("completed");
        updateCount();
    })
});