const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");
const body = document.querySelector('body');

function display() {
  hamburger.classList.add("animate_ham");
  if (hamburger.src.includes("hamburger")) {
    body.classList.add('overflow_y');
    overlay.classList.add('animate_overlay_f');
    overlay.style.visibility = "visible";
    hamburger.nextElementSibling.classList.add('animate_atags_f');
    hamburger.nextElementSibling.style.visibility = "visible";
    
    setTimeout(function () {
        hamburger.src = "images/icon-close-menu.svg";
        hamburger.style.width = "1rem";
        hamburger.style.height = "1rem";
        hamburger.classList.remove("animate_ham");
        overlay.classList.remove('animate_overlay_f');
        hamburger.nextElementSibling.classList.remove('animate_atags_f');
      }, 400);
    } else {
      overlay.classList.add('animate_overlay_b');
      hamburger.nextElementSibling.classList.add('animate_atags_b');

      setTimeout(() => {
        body.classList.remove('overflow_y');
        hamburger.src = "images/icon-hamburger.svg";
        hamburger.style.width = "1.125rem";
        hamburger.style.height = "1.0625rem";
        overlay.style.visibility = "hidden";
        overlay.classList.remove('animate_overlay_b');
        hamburger.classList.remove("animate_ham");
        hamburger.nextElementSibling.style.visibility = "hidden";
        hamburger.nextElementSibling.classList.remove('animate_atags_b');
      }, 400);
  }
}

hamburger.addEventListener("click", display);
