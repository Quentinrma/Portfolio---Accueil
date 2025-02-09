window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.innerWidth > 768) {
    if (window.scrollY > 0) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  } else {
    header.classList.remove("sticky");
  }
});
