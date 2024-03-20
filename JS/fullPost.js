const blogContainer = document.querySelector(".posts-container");

function renderFullPostHtml(post) {
  return `
      <div class="full-post">
      <span class="go-back"> <a class="go-back-link" href="../HTML/blog.html"> Blog </a> / ${post.title}</span>
        <h2 class="section-heading">${post.title}</h2>
            <div class="full-post-content">
                <img src="${post.imageUrl}" alt="${post.title}">
                <div class="full-post-text">
                    <p class="author">${post.author} ${post.date}</p>
                    <p class="content">${post.content}</p>
                </div>
            </div>
      </div>
    `;
}

function renderFullPost(post) {
  blogContainer.innerHTML = renderFullPostHtml(post);
  window.scrollTo({
    top: 0,
  });
}

export { renderFullPost };
