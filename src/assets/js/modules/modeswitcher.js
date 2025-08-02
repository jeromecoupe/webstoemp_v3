const html = document.querySelector("html");
const modeButtons = document.querySelectorAll("[data-modeswitch]");
const activeClass = "is-active";

function switchMode(mode) {
  // remove aria-pressed attribute
  modeButtons.forEach((el) => {
    el.removeAttribute("aria-pressed");
    el.classList.remove(activeClass);

    if (el.dataset.modeswitch === mode) {
      el.setAttribute("aria-pressed", true);
      el.classList.add(activeClass);
    }
  });

  // set and store new mode
  html.dataset.mode = mode;
  localStorage.setItem("mode", mode);
}

/**
 * Initialisation
 */
function init() {
  let initialMode = localStorage.getItem("mode") ?? "system";
  switchMode(initialMode);

  modeButtons.forEach((el) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();
      let mode = el.dataset.modeswitch;
      switchMode(mode);
    });
  });
}

export { init };
