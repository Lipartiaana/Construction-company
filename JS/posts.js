function renderPost(post) {
  return `
      <div class="post">
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

function cropContent(contentElement) {
  let text = contentElement.textContent;
  let limit = 300;

  // If the content is long, it will show a part.
  if (text.length > limit) {
    const newText = text.slice(0, limit);
    const readMore = document.createElement("a");
    readMore.href = "#";
    readMore.textContent = "Read more...";
    readMore.classList.add("read-more");
    return { newText, readMore };
  }
  return text;
}

fetch("../data.json")
  .then((response) => response.json())
  .then((data) => {
    // Renders by date (latest to oldest)
    data.posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    const postsContainer = document.querySelector(".posts-container");
    data.posts.forEach((post) => {
      let postContainer = document.createElement("div");
      let postHTML = renderPost(post);
      postContainer.innerHTML = postHTML;
      postsContainer.appendChild(postContainer);
      let contentElement = postContainer.querySelector(".content");
      let { newText, readMore } = cropContent(contentElement);
      contentElement.textContent = newText;
      if (readMore) {
        contentElement.appendChild(readMore);
      }
    });
  })
  .catch((error) => console.error("Error fetching projects:", error));
