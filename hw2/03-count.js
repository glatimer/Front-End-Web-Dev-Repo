const input = document.querySelector("#userInput");
input.addEventListener("keydown", handleKeyDown);

// When enter is pushed, grab the word to highlight
function handleKeyDown(event) {
  const word = input.value.trim();
  console.log(word);

  // Variable containing searchable content
  const toSearch = document.querySelector(".card-text");
  console.log(toSearch);
}
