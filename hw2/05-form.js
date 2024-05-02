const form = document.querySelector("#myForm"); // Get form
form.addEventListener("submit", handleSubmit); // Get input on submit
const submitButton = document.querySelector("#trigger-modal"); // get submit button
const resetButton = document.querySelector("#trigger-reset"); // get reset button

// Extract form information and output in a modal
// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  // Extract data from the form using FormData object
  const formData = new FormData(form);

  // Display modal back to user
  displayModal(formData);

  // Clear the form
  form.reset();

  return formData;
}

// Function to display modal with form data
function displayModal(formData) {
  const modalBody = document.querySelector("#return-content");

  // Loop through the FormData array adding formatting to each element
  for (const [key, value] of formData) {
    const item = document.createElement("div");
    item.textContent += `${key}: ${value}\n`;
    modalBody.appendChild(item);
  }
  const myModal = new bootstrap.Modal(document.querySelector("#return-modal"));
  myModal.show();
}

// Build modal
function buildModal(dataName) {
  const modal = document.createElement("div");
  modal.classList.add("modal", "fade");
  modal.setAttribute("id", "myModal");

  const modalDialog = document.createElement("div");
  modalDialog.classList.add("modal-dialog");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");

  const modalTitle = document.createElement("h1");
  modalTitle.classList.add("modal-title");
  modalTitle.textContent = `Modal Title`;

  const btnClose = document.createElement("button");
  btnClose.classList.add("btn-close");
  btnClose.setAttribute("type", "button");
  btnClose.setAttribute("data-bs-dismiss", "modal");
  btnClose.setAttribute("aria-label", "Close");

  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");
  modalBody.textContent = `Full Name: ${dataName}`;

  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(btnClose);

  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);

  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);
  return modal;
}

/* RESOURCES
 * input autocomplete => https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values
 * textarea => https://mdbootstrap.com/docs/standard/forms/input-fields/
 */

// // Extract form information
// const dataName = document.getElementById("name").value.trim();
// const dataEmail = document.getElementById("email").value.trim();
// const dataRegistration = document.getElementById("registration").value;
// const pLang = document.getElementById("pLang").checked;
// const OS = document.getElementById("os").checked;
// const fullStack = document.getElementById("full-stack").checked;
// const additional = document.getElementById("questions").value.trim();

// Return form data as an object
// return {
//   dataName,
//   dataEmail,
//   dataRegistration,
//   pLang,
//   OS,
//   fullStack,
//   additional,
// };

// Submit button event
// const submitButton = document.querySelector("#trigger-modal");
// submitButton.addEventListener("click", submitClick);

// Get form data from the submit event and display a confirmation modal
// function submitClick() {
//   const getData = handleSubmit();
//   displayModal(formData);
// }

// const modalBody = document.querySelector("#return-content");
// modalBody.textContent = `Full Name: ${dataName}
// Email: ${dataEmail}
// Registered: ${dataRegistration}
// Classes Taken:
//   Programming Languages: ${pLang}
//   Operating Systems: ${OS}
//   Full Stack Web Development: ${fullStack}
// Other Comments:
//   ${additional}`;

// const myModal = new bootstrap.Modal(document.querySelector("#return-modal"));

// Reset button event
// const resetButton = document.querySelector("#trigger-reset");
// resetButton.addEventListener("click", function (event) {
//   // Clear form fields
//   document.getElementById("myForm").reset();
// });
