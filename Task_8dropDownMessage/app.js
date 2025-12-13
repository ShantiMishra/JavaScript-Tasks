// // DOM refs
// const sel = document.getElementById('typeSelect');
// const box = document.getElementById('messageBox');
// const counterEl = document.getElementById('counter');
// const clearBtn = document.getElementById('clearBtn');

// let shownCount = 0;

// // helper to show message & style
// function showMessage(type) {
//   let text = '';
//   if (type === 'success') text = '✓ Operation successful!';
//   else if (type === 'warning') text = '⚠ Please review your input';
//   else if (type === 'error') text = '✗ Something went wrong';
//   else if (type === 'info') text = "ℹ Here's some information";

//   // set text and class (remove previous classes)
//   box.textContent = text;
//   box.className = 'message ' + type; // e.g. "message success"
//   box.classList.remove('hidden');
// }

// // when dropdown changes
// sel.addEventListener('change', () => {
//   const value = sel.value; // "" or "success"/"warning"/"error"/"info"
//   if (!value) {
//     // if user returns to default, hide box but do not change counter
//     box.classList.add('hidden');
//     return;
//   }

//   // show message and increment counter
//   showMessage(value);
//   shownCount++;
//   counterEl.textContent = 'Messages shown: ' + shownCount;
// });

// // Clear button: hide box and reset dropdown (counter NOT reset)
// clearBtn.addEventListener('click', () => {
//   box.classList.add('hidden');
//   sel.value = '';
// });


const sel = document.getElementById("typeSelect");
const box = document.getElementById("messageBox");
const counterEl = document.getElementById("counter");
const clearBtn = document.getElementById("clearBtn");

let shownCount = 0;

function showMessage(type){
    let text = '';
    if(type== 'success'){
        text = '✓ Operation successful!';
    }

    else if (type=='warning'){
        text = '⚠ Please review your input';
    }
    else if (type=='error'){
        text = '✗ Something went wrong';
    }
    else if (type=='info'){
        text = "ℹ Here's some information";
    }

    box.textContent = text ;
    box.className = 'message ' + type;
    box.classList.remove ('hidden');

}


sel.addEventListener('change' , () => {
   
    const value = sel.value;

    if(!value){
        box.classList.add('hidden');

    }

    showMessage(value);
    shownCount++;
    counterEl.textContent = "Message Shown : " + shownCount;
    

});

clearBtn.addEventListener('click', () => {
  box.classList.add('hidden');
  sel.value = '';
});

