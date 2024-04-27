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
  const pLang = document.getElementById("pLang");
  console.log(`Programming Languages: ${pLang}`);
  const OS = document.getElementById("os");
  console.log(`Operating Systems: ${OS}`);
  const fullStack = document.getElementById("full-stack");
  console.log(`Full Stack: ${fullStack}`);
  const additional = document.getElementById("questions");
  console.log(`Other Comments: ${additional}`);
}

// Extract form information
// const name = document.createElement("p");
// const name = form.elements.name.type;
// console.log(name);

// Create Modal
//   const modal = document.getElementById("modal-fade");
//   const btn = document.getElementById("trigger-modal");
//   const btnClose = document.getElementsByClassName("close");

//   btn.onclick = function () {
//     modal.style.display = "block";
//   };

//   btnClose.onclick = function () {
//     modal.style.display = "none";
//   };

//   window.onclick = function (event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   };

/* RESOURCES
 * input autocomplete => https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values
 */
