const form = document.querySelector("#myForm"); // Get form from HTML
form.addEventListener("submit", handleSubmit); // Extract user input on submit

// If submit button is clicked -> output modal
// If reset button is clicked -> clear form
function handleSubmit(event) {
  event.preventDefault();
  const submitter = event.submitter;
  const handler = submitter.id;

  // Extract data from the form using FormData object
  const formData = new FormData(form);

  // Only display the modal if the submit button was clicked
  if (handler === "trigger-modal") {
    displayModal(formData);
    // Clear the form if reset button is clicked
  } else if (handler === "trigger-reset") {
    form.reset();
  }

  // Otherwise, reset when submit is complete
  form.reset();
}

// Function to display modal with form data
function displayModal(formData) {
  const modalBody = document.querySelector("#return-content");
  modalBody.classList.add("container");

  // Loop through the FormData array adding formatting to each element
  for (const [key, value] of formData) {
    const item = document.createElement("div");
    item.style.padding = "0.3em";
    item.textContent += `${key}: ${value}\n`;
    modalBody.appendChild(item);
  }
  const myModal = new bootstrap.Modal(document.querySelector("#return-modal"));
  myModal.show();
}

/* RESOURCES
 * input autocomplete => https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values
 * textarea => https://mdbootstrap.com/docs/standard/forms/input-fields/
 * form data object => https://developer.mozilla.org/en-US/docs/Web/API/FormData
 * submitter property for button click => https://developer.mozilla.org/en-US/docs/Web/API/SubmitEvent/submitter
 */
