console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", true);
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function showSuccess() {
  successMessage.removeAttribute("hidden");
}

function hideSuccess() {
  successMessage.setAttribute("hidden", true);

form.addEventListener("submit", (event) => {
  event.preventDefault();

const isChecked = tosCheckbox.checked;
if (isChecked) {
  hideTosError();
  showSuccess();
  form.reset();
  alert("Form submitted");
  return;
}
hideSuccess();
showTosError();  
});
