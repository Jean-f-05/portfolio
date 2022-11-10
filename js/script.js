const links = document.querySelector(".nav-links");
const btnHero = document.querySelector(".btn-hero");
const profile = document.querySelector("#profile");
const header = document.querySelector("header");

//BTNS SMOOTH SCROLL //

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

//INTERSECTION OBSERVER ---- FIXED NAVBAR

let options = {
  root: null,
  rootMargin: "-96px",
  threshold: 0,
};

let observer = new IntersectionObserver(function (e) {
  if (!e[0].isIntersecting) document.body.classList.add("sticky");
  if (e[0].isIntersecting) document.body.classList.remove("sticky");
}, options);

observer.observe(header);
