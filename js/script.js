//toggle class active
const hamburger = document.querySelector("#hamburger-menu");
const navbarNav =
  document.querySelector(
    ".navbar-nav"
  ); /* Cari elemen dengan class navbar-nav, simpan ke variabel navbarNav. */

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
  seacrhBox.focus(); //agar saat search button di klik maka akan langsung dalam mode ketik. kalau gk ada ini maka akan ribet, kita harus pencet dulu kotak form nya/
  e.preventDefault(); /*  ini berfungsi saat kita tidak ingin mengatifkan link nya. jadi elemen a di html nya tidak berfungsi*/
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

//saat di klik icon mata maka akan memunculkan boxDetail-item tersebut
/* pake querySelectorall karena kalau pake yang biasa dia hanya akan boisa digunakan oleh elemen yang pertama kali ditemukan oleh js jadi semisal ada 5 card dengan class yg sama, maka hanya elemen pertama yang bisa. maka dari itu kita menggunakan querySelectorall namun bentuk nya akan menjadi nodelist yang artinya kita harus ngasih js, yang mana yang harus diklik karena berati ada 5 list nya. maka dari itu kita menggunakan loop yaitu foreach. */
/* const eyeButton = document.querySelectorAll(".item-detail-button");
const boxFull = document.querySelector("#item-detail-modal");
const closeIcon = document.querySelector(".close-icon");
const modalContent = document.querySelector(".modal-container");

//box-menu  detailnya nya bisa di pencet di semua
eyeButton.forEach((btn) => {
  btn.onclick = (e) => {
    boxFull.style.display = "flex";
    e.preventDefault();
  };
});

//akan menghilangkan Item-detai-modal
//hilang saat di klik tanda X
closeIcon.addEventListener("click", function (e) {
  boxFull.style.display = "none";
  e.preventDefault();
});

//hilang saat diklik, di luar dari class modal container(yang box putih/backgroundnya putih) dan mengklik item-detail-modal(yang background nya agak hitam. di luar dari box putih nya)
document.addEventListener("click", function (e) {
  if (boxFull.contains(e.target) && !modalContent.contains(e.target)) {
    boxFull.style.display = "none";
  }
});
 */
