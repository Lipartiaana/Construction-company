let valuesDisplays = document.querySelectorAll(".banner-count");
let interval = 1000;
let animated = false;

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top + 280 <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0 &&
    rect.left >= 0 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateCounter(valueDisplay, endValue, duration) {
  let startValue = 0;
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue === endValue) {
      clearInterval(counter);
    }
  }, duration);
}

window.onscroll = function () {
  const banner = document.getElementById("banner");
  if (isInViewport(banner) && !animated) {
    valuesDisplays.forEach((valueDisplay) => {
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      animateCounter(valueDisplay, endValue, duration);
    });
    animated = true;
  }
};
