const radio_options = document.querySelectorAll(".hover");
const hidden_btn = document.querySelectorAll(".hidden .green");
const final = document.querySelector(".success");
const final_close = document.querySelector('.success button');

function display_option(e) {
  const label = this.children[0].children[1];
  if (
    e.target.className === "green" ||
    e.target.parentElement.className === "hidden" ||
    e.target.localName == "input"
  ) {
    return;
  } else {
    radio_options.forEach((option) => {
      const opt = option.children[0].children[1];
      if (opt === label && opt.getAttribute("data-flag") === "false") {
        try {
          const hidden = option.children[3];
          hidden.style.display = "flex";
        } catch (error) {}
        this.style.border = "2px solid hsl(176, 50%, 47%)";
        opt.style.background = "hsl(176, 50%, 47%)";
        opt.style.boxShadow = "inset 0 0 0 4px white";
        opt.style.border = "2px solid hsl(176, 50%, 47%)";
        opt.setAttribute("data-flag", "true");
      } else if (opt.getAttribute("data-flag") === "true") {
        try {
          const hidden = option.children[3];
          hidden.removeAttribute("style");
        } catch (error) {}
        option.removeAttribute("style");
        opt.removeAttribute("style");
        opt.setAttribute("data-flag", "false");
      }
    });
  }
}

function success(e) {
  close_back.click();
  final.style.visibility = "visible";
  overlay_back.style.visibility = "visible";
  header.style.zIndex = "0";
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  body.classList.add("overflow_y");
}

function close(e){
  final.style.visibility = 'hidden';
  overlay_back.style.visibility = "hidden";
  header.style.zIndex = "1";
  body.classList.remove('overflow_y')
}

radio_options.forEach((option) =>
  option.addEventListener("click", display_option)
);
hidden_btn.forEach((btn) => btn.addEventListener("click", success));
final_close.addEventListener('click',close);
