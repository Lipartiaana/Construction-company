import { createPostCard, getPostsData } from "./posts.js";

let postsArray = [];
const postsPerPage = 4;
let currentPage = 1;

getPostsData().then((postsData) => {
  postsArray = postsData;
  displayPosts();
});

function displayPosts() {
  const postsContainer = document.querySelector(".posts-container");
  postsContainer.innerHTML = "";

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const postsToDisplay = postsArray.slice(startIndex, endIndex);

  postsToDisplay.forEach((post) => {
    const postDiv = createPostCard(post);
    postsContainer.appendChild(postDiv);
  });

  updatePaginationInfo();
}

function updatePaginationInfo() {
  const pageInfo = document.getElementById("page-info");
  pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(
    postsArray.length / postsPerPage
  )}`;

  document.getElementById("prev-btn").disabled = currentPage === 1;
  document.getElementById("next-btn").disabled =
    currentPage === Math.ceil(postsArray.length / postsPerPage);
}

document.getElementById("prev-btn").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayPosts();
  }
});

document.getElementById("next-btn").addEventListener("click", () => {
  if (currentPage < Math.ceil(postsArray.length / postsPerPage)) {
    currentPage++;
    displayPosts();
  }
});
