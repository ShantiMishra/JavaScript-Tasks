
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

