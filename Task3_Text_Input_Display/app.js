const exact = document.getElementById("normalText");
const upperCase = document.getElementById("upperText");
const lowerCase = document.getElementById("lowerText");
const charCount = document.getElementById("charCount");

const clearBtn = document.getElementById("clear-btn");
const copyBtn = document.getElementById("copy-btn");
const copyMsg = document.getElementById("copyMsg");

const input = document.getElementById("userText");

input.addEventListener("input" , ()=> {
    const text = input.value ;

    exact.textContent = "Exact : "+ text ;
    upperCase.textContent = "Uppercase : " + text.toUpperCase();
    lowerCase.textContent = "Lowercase : " + text.toLowerCase();
    charCount.textContent = "Characters : "  + text.length();
});

clearBtn.addEventListener("click" , ()=>{
    input.value = "";
     exact.textContent = "Exact"+ text ;
    upperCase.textContent = "Uppercase : ";
    lowerCase.textContent = "Lowercase : " ;
    charCount.textContent = "Character : 0" ;
});

copyBtn.addEventListener("click",  ()=> {
    const textToCopy = upperCase.textContent.replace("Uppercase: ", "");

    navigator.clipboard.writeText(textToCopy).then(() => {
        copyMsg.classList.remove("hidden");

        setTimeout(() => {
            copyMsg.classList.add("hidden");
        }, 2000);
    });
});

