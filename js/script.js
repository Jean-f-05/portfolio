const links = document.querySelector(".nav-links");
const btnHero = document.querySelector(".btn-hero");
const profile = document.querySelector("#profile");

links.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    const href = e.target.getAttribute("href");
    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });
    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
});

btnHero.addEventListener("click", function (e) {
  e.preventDefault();
  profile.scrollIntoView({ behavior: "smooth" });
});
// let options = {
//   root: document.querySelector("#profile"),
//   rootMargin: "0px",
//   threshold: 1.0,
// };

// let observer = new IntersectionObserver(callback, options);
