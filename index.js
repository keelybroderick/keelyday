const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
  link.addEventListener("click", function() {
    navLinks.forEach(link => {
      link.classList.remove("selected");
    });
    this.classList.add("selected");
  });
});
