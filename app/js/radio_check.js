const radio_options = document.querySelectorAll(".hover");
const hidden_btn = document.querySelectorAll(".hidden .green");

function display_option(e) {
  const label = this.children[0].children[1];
  console.log(e);
  if (e.target.className === "green" || e.target.parentElement.className === 'hidden' || e.target.localName == 'input') {
    return;
  } else {
    radio_options.forEach((option) => {
      const opt = option.children[0].children[1];
      if (opt === label && opt.getAttribute("data-flag") === "false") {
        try {
          const hidden = option.children[3];
          hidden.style.display = "flex";
        } catch (error) {}
        this.style.border = '2px solid hsl(176, 50%, 47%)';
        opt.style.background = "hsl(176, 50%, 47%)";
        opt.style.boxShadow = "inset 0 0 0 4px white";
        opt.style.border = "2px solid hsl(176, 50%, 47%)";
        opt.setAttribute("data-flag", "true");
    } else if (opt.getAttribute("data-flag") === "true") {
        try {
            const hidden = option.children[3];
            hidden.removeAttribute("style");
        } catch (error) {}
        option.removeAttribute('style');
        opt.removeAttribute("style");
        opt.setAttribute("data-flag", "false");
      }
    });
  }
}

function success(e) {
  console.log(this);
}

radio_options.forEach((option) =>
  option.addEventListener("click", display_option)
);
hidden_btn.forEach((btn) => btn.addEventListener("click", success));
