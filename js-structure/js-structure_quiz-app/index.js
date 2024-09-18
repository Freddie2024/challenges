import Header from "./components/Header/Header.js";
import Form from "./components/Form/Form.js";
import Bookmark from "./components/Bookmark/Bookmark.js";
import Card from "./components/Card/Card.js";
import CardList from "./components/CardList/CardList.js";
import {cards} from "./utils/cards.js";


const form = Form()
form.addEventListener("submit", handleFormSubmit)
function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const newCard = {
    question: data.question,
    answer: data.answer,
    tags: data.tags.split(","),
    isBookmarked: false,
  };

  cards.unshift(newCard);

  // To prevent the need to rerender, we add the new card to the DOM directly
  const cardList = document.querySelector(".card-list");
  const newCardElement = Card(newCard);
  cardList.prepend(newCardElement);

  event.target.reset();
  event.target.elements.question.focus();
}


function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(), CardList());

  return app;
}

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
