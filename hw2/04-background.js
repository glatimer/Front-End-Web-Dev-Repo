const button = document.querySelector("#start"); // start button click
button.addEventListener("click", handleClick);

const userInput = document.querySelector("#num"); // how many seconds inputted
window.addEventListener("load", handleLoad);

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
  //   const background = document.createElement("body");
  //   document.getElementById("randomBackground");
  //   background.style.backgroundColor = colors[rand];
  //   return background;
}

// start button is clicked
function startInterval(seconds) {
  if (!intervalID) {
    intervalID = setInterval(changeBackground, seconds * 1000); // convert to milliseconds
  }
}

function handleClick() {
  const seconds = parseInt(userInput.value);
  const btn = document.createElement("button");

  if (intervalID) {
    clearInterval(intervalID);
    intervalID = null;
    btn.textContent = "Start";
  } else {
    startInterval(seconds);
    btn.textContent = "Stop";
  }
}

// Reload every interval of seconds changing the background color for each reload
function handleLoad() {}
