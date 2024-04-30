const button = document.querySelector("#start"); // start button click
button.addEventListener("click", handleClick);

const userInput = document.querySelector("#num"); // num seconds

// Setup
let intervalID;

// Create an array of colors to select from
const colors = [
  "lightcoral",
  "cadetblue",
  "darkolivegreen",
  "darkmagenta",
  "darkgoldenrod",
  "darkslateblue",
  "cornflowerblue",
];

// Random number generator
function getRandomInt(maxInt) {
  return Math.floor(Math.random() * maxInt);
}

// Set the background to a random color from the colors array
function changeBackground() {
  const rand = getRandomInt(colors.length);
  console.log(`rand num = ${rand}`, `color = ${colors[rand].valueOf()}`);

  // Update the DOM background
  document.body.style.backgroundColor = colors[rand];
}

// Start intervals
function startInterval(seconds) {
  if (!intervalID) {
    intervalID = setInterval(changeBackground, seconds * 1000); // convert to milliseconds
  }
}

// Background changes on intervals and button adapts upon click
function handleClick() {
  const seconds = parseInt(userInput.value);
  const btn = document.getElementById("start");
  btn.classList.add("btn-primary");

  if (intervalID) {
    clearInterval(intervalID);
    intervalID = null;
    btn.value = "Start";
    btn.classList.remove("btn-danger");
  } else {
    startInterval(seconds);
    btn.classList.add("btn-danger");
    btn.value = "Stop";
  }
}
