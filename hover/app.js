const circle = document.querySelector(".circle");

circle.addEventListener("mouseenter", () => {
  circle.classList.toggle("hover");
});

circle.addEventListener("mouseleave", () => {
  circle.classList.toggle("hover");
});
