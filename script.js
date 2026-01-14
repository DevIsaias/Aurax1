window.addEventListener("scroll", function () {
  let header = document.querySelector("#header");
  header.classList.toggle("header-effect", window.scrollY > 200);
});
