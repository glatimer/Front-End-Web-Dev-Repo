const userInput = document.querySelector("#getData");
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
  container.classList.add("card", "mb-3");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let name = document.createElement("h3");
  name.classList.add("card-title");
  name.textContent = characterData.name;

  let birthYear = document.createElement("p");
  birthYear.classList.add("card-text");
  birthYear.textContent = `Birth year: ${characterData.birth_year}`;

  cardBody.appendChild(name);
  cardBody.appendChild(birthYear);
  container.appendChild(cardBody);
  return container;
}

// Display results to DOM
function displayCharacterComponents(resultsArray) {
  let app = document.getElementById("results");

  // Check for null
  if (!resultsArray || resultsArray.length === 0) {
    console.error("The array is empty.");
    return;
  }

  // Display results
  resultsArray.forEach((element) => {
    console.log(element.name, element.birth_year);
    const charComponent = createCharacterComponent(element);
    app.appendChild(charComponent);
  });
}
