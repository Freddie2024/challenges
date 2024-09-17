console.clear();

function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess();
}

// Call handleUserLogin below!

function ShowWelcomeMessage () {
  console.log("Welcome! You are logged in now.")
};

handleUserLogin(ShowWelcomeMessage)

handleUserLogin(function() {
  console.log("Welcome! You are logged in now.")
});
