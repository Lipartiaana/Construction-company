const newsGridContainer = document.querySelector(".news-grid-container");

function renderLatestNewsHtml(post) {
  return `
    <div class="news-grid-item card">
            <img src="${post.imageUrl}" alt="${post.title}" />
            <h2>${post.title}</h2>
            <p>
              ${post.content.slice(
                0,
                120
              )}... <a href="../HTML/blog.html" class="read-more" >See Blog</a>
            </p>
          </div>`;
}

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    // Renders by date (latest to oldest)
    data.posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    const latestNews = data.posts.slice(0, 3);

    latestNews.forEach((post) => {
      const latestNews = document.createElement("div");
      latestNews.innerHTML = renderLatestNewsHtml(post);
      newsGridContainer.appendChild(latestNews);
    });
  })
  .catch((error) => console.error("Error fetching projects:", error));
