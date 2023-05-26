const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector("header nav.navbar ul");
const onMenuBtnClick = () => {
  menu.style.display = "block";
  menuBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
};
menuBtn.addEventListener("click", onMenuBtnClick);
const onCloseBtnClick = () => {
  menu.style.display = "none";
  menuBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
};
closeBtn.addEventListener("click", onCloseBtnClick);

const navItems = menu.querySelectorAll("li");
const changeActiveItem = () => {
  navItems.forEach((item) => {
    const link = item.querySelector("a");
    link.classList.remove("active");
  });
};

navItems.forEach((item) => {
  const link = item.querySelector("a");
  link.addEventListener("click", () => {
    changeActiveItem();
    link.classList.add("active");
  });
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

