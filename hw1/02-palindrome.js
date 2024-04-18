const elem = document.querySelector("input");
elem.addEventListener("change", handleInput); // get input on enter

// Check for positive number
function isPositiveNumber(num) {
  if (num < 0) {
    return false;
  }
}

// Reverse a number
function reverseNumber(num) {
  let result = "";
  for (i = String(num).length - 1; i >= 0; --i) {
    console.log("i: " + num[i]);
    result = result + num[i];
  }
  console.log("result: ", result);
  return result;
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

  // Get the reverse of the userInput
  const reverse = reverseNumber(userInput);

  // Compare the reverse with original for result
  if (userInput === reverse) {
    console.log("Yes. " + userInput + " is a palindrome.");
  } else {
    console.log("No. Try again.");
  }
}
