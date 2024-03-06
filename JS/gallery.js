const galleryContainer = document.querySelector(".gallery-wrapper");

const galleryData = [];
const imagesCount = 12;

for (let i = 0; i < imagesCount; i++) {
  galleryData.push(`../Assets/gallery-images/gallery-${i + 1}.jpg`);
}

galleryData.forEach((img) => {
  const galeryImgLink = document.createElement("a");
  const galleryImgHtml = `<a href="${img}">
          <img src="${img}" alt="gallery image" />
        </a>`;
  galeryImgLink.innerHTML = galleryImgHtml;
  galleryContainer.appendChild(galeryImgLink);
});
