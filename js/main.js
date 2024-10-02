const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.getElementById("hamburger-menu");
const search = document.getElementById("search");
const searchCta = document.querySelector(".search-cta");
const shoppingCta = document.getElementById("shopping-cart");
const shoppingCart = document.querySelector(".shopping-cta");

// ketika hamburger menu di klik
hamburger.addEventListener("click", (e) => {
  navbarNav.classList.toggle("active");

  e.preventDefault();
});

search.addEventListener("click", (e) => {
  searchCta.classList.toggle("active");

  e.preventDefault();
});

shoppingCta.addEventListener("click", (e) => {
  shoppingCart.classList.toggle("active");

  e.preventDefault();
});

// ketika di klik di elemen lain
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!search.contains(e.target) && !searchCta.contains(e.target)) {
    searchCta.classList.remove("active");
  }

  if (!shoppingCta.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// modal box
const eyeButtons = document.querySelectorAll(".eye-btn");
const modalBox = document.querySelector("#modal");
const ctaModal = document.querySelector(".cta-modal");
const xBtn = document.querySelector(".x-cta");
const modalWrapper = document.querySelector(".modal-wrapper");

eyeButtons.forEach((btn) => {
  btn.onclick = (e) => {
    modalBox.style.display = "flex";
    e.preventDefault();
  };
});

document.addEventListener("click", function (e) {
  if (
    !eyeButton.contains(e.target) &&
    !ctaModal.contains(e.target) &&
    !xBtn.contains(e.target) &&
    !modalWrapper.contains(e.target)
  ) {
    modalBox.style.display = "none";
  }
});

xBtn.addEventListener("click", (e) => {
  modalBox.style.display = "none";
  e.preventDefault();
});
