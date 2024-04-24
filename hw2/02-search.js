const userInput = document.querySelector(".getData");
userInput.addEventListener("click", handleClick); // grab data on input click

// Search character array for a match and return the results
function handleClick() {
  const search = document.getElementById("userInput").value.trim();
  console.log(search);

  // Create array of results
  const results = characters.filter((toFind) =>
    toFind.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  console.log(results);

  // Output the results
  displayCharacterComponents(results);
}

// Build a character object
function createCharacterComponent(characterData) {
  const container = document.createElement("section");
  let name = document.createElement("div");
  let birthYear = document.createElement("div");

  name.textContent = characterData.name;
  birthYear.textContent = `Birth year: ${characterData.birth_year}`;

  container.append(name);
  container.append(birthYear);
  return container;
}

// Display results to DOM
function displayCharacterComponents(resultsArray) {
  let app = document.getElementById("results");
  // clear previous results
  if (!resultsArray || resultsArray.length === 0) {
    console.error("The array is empty.");
    return;
  }
  resultsArray.forEach((element) => {
    console.log(element.name, element.birth_year);
    const charComponent = createCharacterComponent(element);
    app.appendChild(charComponent);
  });
}
