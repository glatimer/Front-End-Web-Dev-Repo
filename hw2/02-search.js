// import { characters } from "02-data.js";
// const userInput = document.getElementsByClassName(".getData");

const userInput = document.querySelector(".getData");
userInput.addEventListener("click", handleClick); // grab data on input click

// Search data.js for the character
function handleClick() {
  const search = document.getElementById("userInput").value;
  console.log(search);
}
