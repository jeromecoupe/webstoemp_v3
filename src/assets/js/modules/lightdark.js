const htmlEl = document.querySelector("html");
const toggleModeEl = document.querySelector(".js-lightdark");

function setMode(mode) {
  localStorage.setItem("mode", mode);
  htmlEl.dataset.mode = mode;
}

function toggleMode() {
  let newMode = htmlEl.dataset.mode === "light" ? "dark" : "light";
  setMode(newMode);
}

function init() {
  // get system mode
  let systemMode = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  // set default mode: localStorage, system as fallback
  let defaultMode = localStorage.getItem("mode") ?? systemMode;

  setMode(defaultMode);

  toggleModeEl.addEventListener("click", (event) => {
    toggleMode();
  });
}

export { init };
