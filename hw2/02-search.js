const userInput = document.querySelector(".getData");
userInput.addEventListener("click", handleClick); // grab data on input click

// Display all elements in the result array
function displayAll(data) {
  // check for null
  if (!data) {
    console.error("The array is empty.");
    return;
  }
  data.forEach((element) => console.log(element));
}

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
  displayAll(results);
}
