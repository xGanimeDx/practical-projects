const monkeyClosed = document.querySelector(".closed");
const monkeyOpen = document.querySelector(".open");

monkeyClosed.addEventListener("click", () => {
  monkeyClosed.classList.toggle("active");
  monkeyOpen.classList.toggle("active");
});

monkeyOpen.addEventListener("click", () => {
  monkeyClosed.classList.toggle("active");
  monkeyOpen.classList.toggle("active");
});
