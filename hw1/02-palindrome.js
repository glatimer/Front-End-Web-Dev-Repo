const elem = document.querySelector("input");

elem.addEventListener("change", handleInput);

// Check for positive number
function isPositiveNumber(num) {
  if (num < 0) {
    return false;
  }
}

function handleInput() {
  // Element to string
  const userInput = elem.value;
  console.log("input: " + userInput);

  // Check for a positive number
  if (isPositiveNumber(userInput) === false) {
    console.error("Please, enter a positive number.");
    return;
  }
}
