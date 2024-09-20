console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container

  /* copied from the provided solutions: 
  const date = new Date().toDateString();
  const message = `New message! Received at: ${date}`;

  const toast = document.createElement("li");
  toast.classList.add("toast-container__message");
  toast.textContent = message;
  toastContainer.append(toast);
*/

  
  const newElement = document.createElement("li");
  toastContainer.append(newElement);
  newElement.classList.add("toast-container__message");
  newElement.textContent = "I'm a toast message.";
  
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = "";
});
