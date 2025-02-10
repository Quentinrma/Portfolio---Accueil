// Create a button element
const topButton = document.createElement("button");
topButton.innerHTML = "↑";
topButton.id = "topButton";
document.body.appendChild(topButton);



window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};

// Scroll to the top of the document when the button is clicked
topButton.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
