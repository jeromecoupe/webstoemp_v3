class ModeSwitcher extends HTMLElement {
  constructor() {
    super();

    this.html = document.querySelector("html");
    this.modeButtons = document.querySelectorAll("button[data-switchmode]");
    this.activeClass = "is-active";
    this.initialMode = localStorage.getItem("mode") ?? "system";
  }

  switchMode(mode) {
    this.modeButtons.forEach((el) => {
      el.removeAttribute("aria-pressed");
      el.classList.remove(this.activeClass);

      if (el.dataset.switchmode === mode) {
        el.setAttribute("aria-pressed", true);
        el.classList.add(this.activeClass);
      }
    });

    this.html.dataset.mode = mode;
    localStorage.setItem("mode", mode);
  }

  connectedCallback() {
    this.switchMode(this.initialMode);

    this.modeButtons.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        this.switchMode(btn.dataset.switchmode);
      });
    });
  }
}

customElements.define("mode-switcher", ModeSwitcher);
