const input = document.querySelector("#userInput");
input.addEventListener("keydown", handleKeyDown); // grab input on enter

// Search and replace inputted word globally with highlighted word
function handleKeyDown(event) {
  const word = input.value.trim();

  // Variable containing searchable content
  const textBody = document.querySelector(".card-text");

  const regex = new RegExp(word, "gi"); // g = global search

  // Create a highlighted word to replace the match
  const highlightedWord = document.createElement("span");
  highlightedWord.textContent = word;
  highlightedWord.style.backgroundColor = "yellow";

  // Replace all matching words with the highlightedWord
  const highlightedText = textBody.textContent.replaceAll(
    regex,
    highlightedWord.outerHTML
  );

  // Update and output
  textBody.innerHTML = highlightedText;
}

// Resources
/*
 * regex => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
 */
