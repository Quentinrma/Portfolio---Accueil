function Stickyheader() {
  const header = document.querySelector("header");
  if (header) {
    if (!header.classList.contains("sticky")) {
      if (window.innerWidth > 768) {
        header.classList.add("sticky");
      }
    } else {
      if (window.innerWidth < 768) {
        header.classList.remove("sticky");
      }
    }
  }
}

Stickyheader();

window.addEventListener("resize", Stickyheader);


// -----------------------------

