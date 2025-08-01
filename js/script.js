//toggle class active
const hamburger = document.querySelector("#hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");

//ketika humberger menu di klik
hamburger.onclick = (e) => {
  navbarNav.classList.toggle("active"); // arrow function artinya akan menjalan sebuah fungsi
  e.preventDefault();
};

// klik di luar sidebar untuk menghilangkan nya
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

/* toggle seacrh */
const seacrhButton = document.querySelector("#search-button");
const seacrhForm = document.querySelector(".search-form");
const seacrhBox = document.querySelector("#search-box");

seacrhButton.onclick = (e) => {
  seacrhForm.classList.toggle("active");
  seacrhBox.focus();
  e.preventDefault();
};

/* klik di luar seacrh-box untuk menghilangkan */
document.addEventListener("click", function (e) {
  if (!seacrhButton.contains(e.target) && !seacrhForm.contains(e.target)) {
    seacrhForm.classList.remove("active");
  }
});

/* toggle cart  */
const cartIcon = document.querySelector("#cart");
const cartBar = document.querySelector(".shopping-cart");

cartIcon.onclick = (e) => {
  cartBar.classList.toggle("active");
  e.preventDefault();
};

/* saat klik diluar bar-cart akan menghilang */
document.addEventListener("click", function (e) {
  if (!cartIcon.contains(e.target) && !cartBar.contains(e.target)) {
    cartBar.classList.remove("active");
  }
});
