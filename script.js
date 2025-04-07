const btn = document.querySelector(".switch");
const bulbTop = document.querySelector(".bulb-top");
const bulbBottom = document.querySelector(".bulb-bottom");

let isOpen = "false";
btn.addEventListener("click", function () {
  if (isOpen) {
    btn.classList.remove("switch_on");
    bulbTop.classList.remove("bulbOn");
    bulbBottom.classList.remove("bulbOn");
  } else {
    btn.classList.add("switch_on");
    bulbTop.classList.add("bulbOn");
    bulbBottom.classList.add("bulbOn");
  }
  isOpen = !isOpen;
});
