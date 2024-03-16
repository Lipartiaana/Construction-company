function renderPost(post) {
  return `
      <div class="post">
        <img src="${post.imageUrl}" alt="${post.title}">
        <div class="post-details">
            <div class="psot-head">
                <h2>${post.title}</h2>
                <p class="author">${post.author} ${post.date}</p>
            </div>
          <p class="content">${post.content}</p>
        </div>
      </div>
    `;
}

fetch("../data.json")
  .then((response) => response.json())
  .then((data) => {
    const postsContainer = document.querySelector(".posts-container");
    data.posts.forEach((post) => {
      const projectHTML = renderPost(post);
      postsContainer.innerHTML += projectHTML;
    });
  })
  .catch((error) => console.error("Error fetching projects:", error));
