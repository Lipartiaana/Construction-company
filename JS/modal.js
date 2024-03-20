const categoryElements = document.querySelectorAll(".category");
const categoryModal = document.querySelector(".category-modal");

function openModal(category) {
  const modal = document.querySelector(".category-modal");
  modal.classList.add("modal");

  const modalImage = modal.querySelector(".modal-image");
  modalImage.src = category.querySelector("img").src;

  const modalTitle = modal.querySelector(".modal-title");
  modalTitle.textContent = category.querySelector("h2").textContent;

  const modalList = modal.querySelector(".modal-list");
  modalList.innerHTML = category.querySelector("ul").innerHTML;
  modalList.style.display = "block";
  modal.style.display = "flex";

  const close = modal.querySelector(".close");
  close.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}

categoryElements.forEach((category) => {
  category.addEventListener("click", function (e) {
    e.preventDefault();
    openModal(category);
  });
});
