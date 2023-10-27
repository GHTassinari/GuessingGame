const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

// Events
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", pressEnter);

// Functions
function handleTryClick(event) {
  event.preventDefault(); // It will prevent the default, from happening

  const inputNumber = document.querySelector("#inputNumber");
  const enteredValue = Number(inputNumber.value);

  // This will verify if the input is empty, if it isn't a number, or if it is between 0 and 10.
  if (inputNumber.value.trim() === "" || isNaN(enteredValue) || enteredValue < 0 || enteredValue > 10) {
    if (inputNumber.value.trim() === "" || isNaN(enteredValue)) {
        alert("Please enter a valid number.");
    } else if (enteredValue < 0 || enteredValue > 10) {
        alert("Please enter a number between 0 and 10");
    }
    inputNumber.value = "";
    return; // This will exit the function early
    }

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen();

    screen2.querySelector(
      "h2"
    ).innerText = `You guessed it in ${xAttempts} attempts`;
  }

  inputNumber.value = "";
  xAttempts++;
}
function handleResetClick() {
  toggleScreen();
  xAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function pressEnter(enter){
  if (enter.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
}
