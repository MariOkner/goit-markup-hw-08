(() => {
  const refs = {
    openMenuBtn: document.querySelector(".header__open-button"),
    closeMenuBtn: document.querySelector(".header__close-button"),
    menu: document.querySelector(".mob-menu"),
    body: document.querySelector("body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
      refs.menu.classList.toggle("no-scroll");
  }
})();