var topButton = document.getElementById("topBtn");
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};

topButton.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

document.querySelector("#first a").addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector("#about").scrollIntoView({
    behavior: "smooth",
  });
});
