const text = document.getElementById("sampleText");
const sizeDisplay = document.getElementById("sizeDiaplay");

const smallerBtn = document.getElementById("smallerBtn");
const largerBtn = document.getElementById("largerBtn");
const resetBtn = document.getElementById("resetBtn");

const slider = document.getElementById("slider");
const presetBtns = document.querySelectorAll(".presets button");


let fontSize = 16;

function updateUI(){

  text.style.fontSize = fontSize + "px";
  sizeDisplay.textContent = "Current size: " + fontSize + "px";
  slider.value = fontSize;

   smallerBtn.disabled = fontSize <= 10;
  largerBtn.disabled = fontSize >= 40;

}

smallerBtn.addEventListener("click", () => {
  if (fontSize > 10) {
    fontSize -= 2;
    updateUI();
}
});


largerBtn.addEventListener("click", () => {
  if (fontSize < 40) {
    fontSize += 2;
    updateUI();
  }
});


slider.addEventListener("input", () => {
  fontSize = Number(slider.value);
  updateUI();
});


presetBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    fontSize = Number(btn.dataset.size);
    updateUI();
  });
});


updateUI();
