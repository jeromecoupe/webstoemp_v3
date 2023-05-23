const mobileMenu = document.querySelector(".js-mobilemenu");
const mobileTriggers = document.querySelectorAll(".js-mobilemenu-trigger");
const activeClass = "is-active";

function init() {
  mobileTriggers.forEach((trigger) => {
    trigger.addEventListener(
      "click",
      (event) => {
        event.preventDefault;
        mobileMenu.classList.toggle(activeClass);
      },
      false
    );
  });
}

export { init };
