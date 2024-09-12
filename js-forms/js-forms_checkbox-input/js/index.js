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

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  const isChecked = tosCheckbox.checked;
  console.log("isChecked", isChecked);
  if (isChecked) {
    hideTosError();
    
    form.reset();
    alert("Form submitted");
    return;
  }
  
  showTosError();
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
});
  