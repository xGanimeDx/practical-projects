const btn = document.querySelector(".nav-toggle");
const menu = document.querySelector(".links");

btn.addEventListener("click", () => {
  menu.classList.toggle("show-links");
});
