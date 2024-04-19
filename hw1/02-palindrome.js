// Declarations
const elem = document.querySelector("input");
elem.addEventListener("change", handleInput); // get input on enter
const output = document.getElementById("result"); // output the result to HTML

// Check for positive number
function isPositiveNumber(num) {
  if (Number(num) < 0) {
    return false;
  }
  return true;
}

// Reverse a number
function reverseNumber(num) {
  const result = "";
  for (i = String(num).length - 1; i >= 0; --i) {
    result = result + num[i];
  }
  return result;
}

function handleInput() {
  // Element to string
  const userInput = elem.value;

  // Check for a positive number
  if (isPositiveNumber(userInput) === false) {
    window.alert("Please, enter a positive number.");
    return;
  }

  // Get the reverse of the userInput
  const reverse = reverseNumber(userInput);

  // Compare the reverse with original for result
  if (userInput === reverse) {
    output.innerHTML = "Yes. " + userInput + " is a palindrome.";
  } else {
    output.innerHTML = "No. Try again.";
  }
}
