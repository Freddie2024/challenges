console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

// console.log(display.innerText)

function getGreeting() {
  const hours = new Date().getHours();
  if (hours >= 6 && hours <= 12) {
    return "Good Morning";
  } else if (hours >= 13 && hours <= 18) {  
    return "Good Afternoon";
  } else if (hours >= 19 && hours <= 22) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
}

function getDayColor() {
  const weekday = new Date().getDay();

console.log(weekday)

  if (weekday === 1) {
    return "darkgray";
  } 
  if (weekday <= 2 && weekday <= 5) {
    return "lightblue";
    }
  if (weekday === 6 || weekday === 0) {
    return "hotpink";
  } 
}


display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
