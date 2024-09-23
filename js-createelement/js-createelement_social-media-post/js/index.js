console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);



const newPost = document.createElement("section");
const postContent = document.createElement("p");
const postFooter = document.createElement("footer");
const postUserName = document.createElement("span");
const postButton = document.createElement("button");

document.body.append(newPost);
newPost.append(postContent);
newPost.classList.add("post");
postContent.classList.add("post__content");
postContent.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
newPost.append(postFooter);

postFooter.classList.add("post__footer");

postFooter.append(postUserName);
postUserName.classList.add("post__username");
postUserName.textContent = "@username";

postFooter.append(postButton);
postButton.classList.add("post__button");
postButton.textContent = "♥ Like";
postButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
