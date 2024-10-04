import { renderFullPost } from "./fullPost.js";

function renderPost(post) {
  return `
      <div class="post" id="${post.id}">
        <img src="${post.imageUrl}" alt="${post.title}">
        <div class="post-details">
            <div class="post-head">
                <h2>${post.title}</h2>
                <p class="author">${post.author} ${post.date}</p>
            </div>
          <p class="content">${post.content}</p>
        </div>
      </div>
    `;
}

function cropContent(contentElement, postObj) {
  let text = contentElement.textContent;
  let limit = 300;

  // If the content is long, it will show a part.
  if (text.length > limit) {
    const newText = text.slice(0, limit) + "...";
    const readMore = document.createElement("a");
    readMore.href = "#";
    readMore.textContent = "Read more";
    readMore.classList.add("read-more");
    contentElement.appendChild(readMore);
    readMore.addEventListener("click", function (e) {
      e.preventDefault();
      renderFullPost(postObj);
    });
    return { newText, readMore };
  }
  return text;
}

async function getPostsData() {
  try {
    const response = await fetch("../data.json");
    const data = await response.json();
    // Sort posts by date (latest to oldest)
    data.posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    const postsData = data.posts;
    return postsData;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
}

function createPostCard(post) {
  const postContainer = document.createElement("div");
  postContainer.innerHTML = renderPost(post);
  let contentElement = postContainer.querySelector(".content");
  let { newText, readMore } = cropContent(contentElement, post);
  contentElement.textContent = newText;
  if (readMore) {
    contentElement.appendChild(readMore);
  }
  return postContainer;
}

export { getPostsData, createPostCard };
