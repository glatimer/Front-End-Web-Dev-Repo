const form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventdefault();
}
