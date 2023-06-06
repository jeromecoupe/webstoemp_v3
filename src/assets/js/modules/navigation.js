const mobileMenu = document.querySelector(".js-mobilemenu");
const pageBody = document.querySelector("body");
const mobileTriggers = document.querySelectorAll(".js-mobilemenu-trigger");
const activeClass = "is-active";
const bodyClass = "has-menu";

function init() {
  mobileTriggers.forEach((trigger) => {
    trigger.addEventListener(
      "click",
      (event) => {
        event.preventDefault();
        mobileMenu.classList.toggle(activeClass);
        pageBody.classList.toggle(bodyClass);
      },
      false
    );
  });
}

export { init };
