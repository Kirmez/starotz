
document.addEventListener("DOMContentLoaded", function () {
  const cookieModule = document.querySelector(".cookie-module");
  const closeButton = document.getElementById("closeButton");

  cookieModule.style.display = "block";

  closeButton.addEventListener("click", function () {
    cookieModule.style.display = "none";
  });
});
