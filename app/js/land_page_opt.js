const btn_sec3 = document.querySelectorAll(".section__3 .green");

const matcher = [...radio_options];

function skip(e) {
  button.click();
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  const index = this.getAttribute('data-index');
  const opt = matcher[parseInt(index)];
  opt.click();
  opt.scrollIntoView({behavior: 'smooth'});
}

btn_sec3.forEach((btn) => btn.addEventListener("click", skip));
