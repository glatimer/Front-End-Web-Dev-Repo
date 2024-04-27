const form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventdefault();
}
// const form = document.getElementById("myForm");
// console.log(form);
// if (form) {
//   form.addEventListener("submit", function handleSubmit(event) {
//     event.preventDefault(); // Prevent form submission
//     console.log("Form submitted!");
//   });
// } else {
//   console.error("Form element not found!");
// }

/* RESOURCES
 * input autocomplete => https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values
 */
// document.getElementById("myForm").addEventListener("submit", function (event) {
//   event.preventDefault(); // Prevent the default form submission

//   // Retrieve form inputs
//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var registration = document.getElementById("registration").value;

//   // Retrieve checkbox values
//   var pLangChecked = document.getElementById("pLang").checked;
//   var osChecked = document.getElementById("os").checked;
//   var fullStackChecked = document.getElementById("full-stack").checked;

//   // Retrieve textarea value
//   var questions = document.getElementById("questions").value;

//   // Log the values to the console
//   console.log("Name:", name);
//   console.log("Email:", email);
//   console.log("Registration:", registration);
//   console.log("Programming Languages Course Taken:", pLangChecked);
//   console.log("Operating Systems Course Taken:", osChecked);
//   console.log("Full Stack Web Development Course Taken:", fullStackChecked);
//   console.log("Additional Questions/Comments:", questions);
// });
