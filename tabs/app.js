const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    // remove "active" class from all btns and add it to one which was clicked
    btns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    // hide other articles
    articles.forEach((article) => {
      article.classList.remove("active");
    });
    // select clicked article and add "active" class to it
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
