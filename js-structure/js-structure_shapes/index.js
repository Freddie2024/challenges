import { getRandomColor } from "./utils/randomColor.js";
import Circle from "./components/Circle/Circle.js";
import Square from "./components/Square/Square.js";
import Pentagon from "./components/Pentagon/Pentagon.js";

console.clear();

const root = document.getElementById("root");

const circleElement = Circle();
console.log("circleElement",circleElement);

const squareElement = Square();
console.log("squareElement",squareElement);

const pentagonElement = Pentagon();
console.log("pentagonElement",pentagonElement);

root.append(circleElement, squareElement, pentagonElement);
