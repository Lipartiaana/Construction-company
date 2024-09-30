const fadedSections = document.querySelectorAll(".faded-section");

window.addEventListener("scroll", () => {
  fadedSections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerHeight = window.innerHeight * 0.85;

    if (sectionTop < triggerHeight && !section.classList.contains("fade-in")) {
      section.classList.add("fade-in");
    }
  });
});
