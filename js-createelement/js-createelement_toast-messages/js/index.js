console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", (event) => {
  // Exercise: Append a new entry to the toast messages container
  const newElement = document.createElement("li");
  toastContainer.append(newElement);
  newElement.classList.add("toast-container__message");
  newElement.textContent = "I'm a toast message.";
});

clearButton.addEventListener("click", (event) => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = "";
});
