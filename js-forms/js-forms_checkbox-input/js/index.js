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
}

hideTosError();
hideSuccess();

tosCheckbox.addEventListener("input", (event) => {
  if (event.target.checked) {
  hideTosError(tosError); 
} else {
  showTosError(tosError)};
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  const isChecked = tosCheckbox.checked;
  console.log("isChecked", isChecked);
  if (isChecked) {
    hideTosError();
    showSuccess();
    form.reset();
    alert("Form submitted");
    return;
  }
  
  showTosError();
  hideSuccess();
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert

});
  