const htmlEl = document.querySelector("html");
const themeToggle = document.querySelector(".js-themetoggle");
const themeToggleLabel = document.querySelector(".js-themetoggle-label");

function setTheme(theme) {
  localStorage.setItem("theme", theme);
  htmlEl.dataset.theme = theme;
  themeToggleLabel.innerText = theme;
}

function toggleTheme() {
  let newTheme = htmlEl.dataset.theme === "light" ? "dark" : "light";
  setTheme(newTheme);
}

function init() {
  // get system theme
  let systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  // set default theme: localStorage, system as fallback
  let defaultTheme = localStorage.getItem("theme") ?? systemTheme;

  setTheme(defaultTheme);

  themeToggle.addEventListener("click", (event) => {
    toggleTheme();
  });
}

export { init };
