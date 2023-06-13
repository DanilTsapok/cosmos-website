let wrapper = document.querySelector(".wrapper");
let loginLink = document.querySelector(".login-link");
let registerLink = document.querySelector(".register-link");
let LoginBtn = document.querySelector(".header__btn");
let headerelement = document.querySelector(".first__block__left__content");
let close = document.querySelector(".closed");

let img = document.getElementById("img");

let circle_anim = document.querySelector(".circle");
console.log(circle_anim);

LoginBtn.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
  headerelement.classList.add("hide");
});
close.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
  headerelement.classList.remove("hide");
});
loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

const btnUpper = document.getElementById("btn-upper");

window.onscroll = function () {
  let scrollTop = window.pageYOffset;
  let header = document.querySelector("header");
  let scroll = document.getElementById("scroll");
  let skills = document.getElementById("skills");
  console.log(scrollTop);
  if (scrollTop > 1) {
    wrapper.classList.remove("active-popup");
    headerelement.classList.remove("hide");
    header.classList.add("bg-header");
    scroll.classList.add("visible");
  } else {
    header.classList.remove("bg-header");
    scroll.classList.remove("visible");
  }
  if (scrollTop > 0) {
    img.classList.add("moving_img");
  }
  if (scrollTop > 150) {
    img.classList.remove("moving_img");
  }

  if (scrollTop > 230) {
    skills.classList.add("skills_vis");
  } else {
    skills.classList.remove("skills_vis");
  }
};

btnUpper.onclick = () => {
  window.scrollTo(0, 0);
};
