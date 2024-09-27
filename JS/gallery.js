const galleryContainer = document.querySelector(".gallery-wrapper");
const galleryModal = document.querySelector(".gallery-modal");

const modalImage = document.querySelector(".modal-image");
const close = galleryModal.querySelector(".close");
const prevButton = galleryModal.querySelector(".prev-button");
const nextButton = galleryModal.querySelector(".next-button");

const galleryData = [];
const imagesCount = 12;
let currentImg = 0;

for (let i = 0; i < imagesCount; i++) {
  galleryData.push(`../Assets/gallery-images/gallery-${i + 1}.jpg`);
}

galleryData.forEach((img, index) => {
  const galeryImgLink = document.createElement("a");
  const galleryImgHtml = `<img src="${img}" alt="gallery image" style="cursor:pointer" />`;
  galeryImgLink.innerHTML = galleryImgHtml;
  galeryImgLink.onclick = function () {
    openGallery(index);
  };
  galleryContainer.appendChild(galeryImgLink);
});

function openGallery(index) {
  currentImg = index;
  modalImage.src = galleryData[currentImg];
  galleryModal.style.display = "block";
}

close.addEventListener("click", () => {
  galleryModal.style.display = "none";
});

nextButton.addEventListener("click", () => {
  currentImg = (currentImg + 1) % imagesCount;
  modalImage.src = galleryData[currentImg];
});

prevButton.addEventListener("click", () => {
  currentImg = (currentImg - 1 + imagesCount) % imagesCount;
  modalImage.src = galleryData[currentImg];
});
