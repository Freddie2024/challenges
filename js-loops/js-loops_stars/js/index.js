console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--

  for (let stars = 1; stars <= 5; stars++) {
    const starsImage = document.createElement("img");
   
    stars <= filledStars ?
    (starsImage.src = "assets/star-filled.svg") :
    (starsImage.src = "assets/star-empty.svg");

    starsImage.addEventListener("click", () => {
      renderStars(stars);

  });



    starContainer.append(starsImage);
  }


  //--^-- your code here --^--
}

renderStars(3);
