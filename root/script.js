const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav-row2");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
