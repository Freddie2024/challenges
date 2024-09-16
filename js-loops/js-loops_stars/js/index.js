console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars() {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--

  for (let stars = 1; stars <= 5; stars++) {
    const emptyStar = document.createElement("img");
    emptyStar.src = "assets/star-empty.svg"
    starContainer.append(emptyStar);
  }


  //--^-- your code here --^--
}

renderStars();
