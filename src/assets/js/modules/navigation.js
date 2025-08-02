const navTriggers = document.querySelectorAll(".js-navtrigger");
const body = document.querySelector("body");
const mobileMenu = document.querySelector(".js-mobilemenu");

function init() {
  navTriggers.forEach((el) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();
      body.classList.toggle("has-menu");
      mobileMenu.classList.toggle("is-open");
    });
  });
}

export { init };
