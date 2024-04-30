const form = document.querySelector("form"); // Get form
form.addEventListener("submit", handleSubmit); // Get input on submit

// Extract form information and output in a modal
function handleSubmit(event) {
  event.preventDefault();

  // Extract info from form
  const dataName = document.getElementById("name").value.trim();
  console.log(`Data Name: ${dataName}`);
  const dataEmail = document.getElementById("email").value.trim();
  console.log(`Data Email: ${dataEmail}`);
  const dataRegistration = document.getElementById("registration").value;
  console.log(`Registered: ${dataRegistration}`);
  const pLang = document.getElementById("pLang").checked;
  console.log(`Programming Languages: ${pLang}`);
  const OS = document.getElementById("os").checked;
  console.log(`Operating Systems: ${OS}`);
  const fullStack = document.getElementById("full-stack").checked;
  console.log(`Full Stack: ${fullStack}`);
  const additional = document.getElementById("questions").value.trim();
  console.log(`Other Comments: ${additional}`);

  // On submit open the modal
  const myModal = document.querySelector(".modal");
  const modalContent = myModal.querySelector(".modal-content");
  modalContent.textContent = `Name: ${dataName}`;
  myModal.style.display = "block";
}

/* RESOURCES
 * input autocomplete => https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values
 */
